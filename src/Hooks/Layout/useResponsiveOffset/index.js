import {useEffect, useLayoutEffect, createRef, useReducer} from "react";
import {isNotNull, isNotUndefined} from "../../../Utils";
import memoizeOne from "memoize-one";
import {rOffsetReducer} from "./rOffsetReducer";

const createRefs = (staticArray) => {
    const aux = {};
    staticArray.forEach((offset) => {
        aux[offset] = createRef();
    });
    return aux;
};
const memoRefs = memoizeOne(createRefs);

function parseHeight(height, defaultHeight) {
    let h = defaultHeight;
    console.log();
    if (height.includes("px")) {
        h = height.substring(0, height.length - 2);
    }
    return h;
}

function useResponsiveOffset({staticArr, responsiveArr, multipliers}) {
    const initialState = {
        staticRefs: memoRefs(staticArr),
        responsiveRefs: memoRefs(responsiveArr),
        containerRef: createRef(),
        trigger: 0,
        multis: {},
        containerHeight: 0,
    };
    const [state, dispatch] = useReducer(rOffsetReducer, initialState);
    const {
        staticRefs,
        responsiveRefs,
        containerRef,
        multis,
        trigger,
        containerHeight,
    } = state;

    //measures container's responsive size
    let observer = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
            const h = entry.contentRect.height;
            if (h > 0 && h !== containerHeight) {
                console.log(entry.contentRect.height);
                dispatch({
                    type: "SET_CONTAINERHEIGHT",
                    payload: h,
                });
            }
        });
    });

    useEffect(() => {
        observer.observe(containerRef.current);
    }, [observer, containerRef]);

    useLayoutEffect(() => {
        let offset = 0;
        staticArr.forEach((refName) => {
            const ref = staticRefs[refName].current;
            offset =
                offset +
                (isNotNull(ref)
                    ? parseHeight(
                          ref.style.height,
                          ref.getBoundingClientRect().height
                      )
                    : 0);
        });
        if (isNotNull(containerRef.current)) {
            const total = Math.abs(containerHeight - offset);
            const split = total / responsiveArr.length;
            responsiveArr.forEach((responsiveRefName) => {
                const currentRef = responsiveRefs[responsiveRefName].current;
                const calc =
                    split * isNotUndefined(multis[responsiveRefName], 1);
                if (currentRef.style) {
                    currentRef.style.height = `${calc}px`;
                } else {
                    const style = {height: `${calc}px`};
                    currentRef.style = style;
                }
            });
        }
    }, [
        staticRefs,
        responsiveRefs,
        containerRef,
        staticArr,
        responsiveArr,
        multis,
        trigger,
        containerHeight,
    ]);

    useEffect(() => {
        window.addEventListener("resize", dispatch({type: "SET_TRIGGER"}));
        return () => {
            window.removeEventListener(
                "resize",
                dispatch({type: "SET_TRIGGER"})
            );
        };
    }, []);

    useLayoutEffect(() => {
        const length = responsiveArr.length;
        if (length > 1) {
            let auxMultis = {};
            let acumHeight = 0;
            let acumMulti = 0;
            let count = 0;
            Object.values(multipliers).forEach((value) => {
                return value !== false ? count++ : count;
            });
            const noMultiCount = length - count;
            const split = 100 / length;
            const keys = Object.keys(multipliers);
            keys.forEach((key) => {
                if (multipliers[key]) {
                    const multi = (multipliers[key] / 100) * noMultiCount + 1;
                    acumMulti += multi;
                    acumHeight += multi * split;
                    auxMultis[key] = multi;
                }
            });
            if (acumMulti <= length) {
                if (count === length) {
                    const arr = Object.entries(auxMultis);
                    let min = Number.POSITIVE_INFINITY;
                    let key = "";
                    for (const value of arr) {
                        const aux = Math.min(min, value[1]);
                        key = aux !== min ? value[0] : key;
                        min = aux;
                    }
                    multipliers[key] = false;
                    count--;
                    acumHeight = acumHeight - min * 100;
                }

                const calc = (100 - acumHeight) / split / noMultiCount;
                keys.forEach((key) => {
                    if (!multipliers[key]) {
                        auxMultis[key] = calc;
                    }
                });
                dispatch({type: "SET_MULTIS", payload: auxMultis});
            } else {
                console.log("mas de 100");
            }
        }
    }, [multipliers, responsiveArr.length]);

    return {...staticRefs, ...responsiveRefs, containerRef};
}

export default useResponsiveOffset;
