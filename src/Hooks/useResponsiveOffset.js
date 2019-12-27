import { useEffect, useLayoutEffect, useState, createRef } from "react";
import { isNotNull, isNotUndefined } from "../Utils";
import memoizeOne from 'memoize-one';

const createRefs = (offsetArray) => {
    const aux = {};
    offsetArray.forEach((offset) => {
        aux[offset] = createRef();
    })
    return aux;
};
const memoRefs = memoizeOne(createRefs);

function useResponsiveOffset({ offsetArr, responsiveArr, multipliers }) {
    const [trigger, setTrigger] = useState();
    const [multis, setMultis] = useState({});
    const [height, setHeight] = useState({});
    const [state] = useState({
        offsetRefs: memoRefs(offsetArr),
        responsiveRefs: memoRefs(responsiveArr),
        containerRef: createRef()
    });
    const { offsetRefs, responsiveRefs, containerRef } = state;

    useLayoutEffect(() => {
        let offset = 0;
        offsetArr.forEach(ref => {
            const currentRef = offsetRefs[ref].current;
            offset = offset + (isNotNull(currentRef) ? currentRef.getBoundingClientRect().height : 0);
        });
        if (isNotNull(containerRef.current)) {
            const total = containerRef.current.getBoundingClientRect().height - offset;
            setHeight(total);
            const split = total / responsiveArr.length
            responsiveArr.forEach(ref => {
                const currentRef = responsiveRefs[ref].current;
                const calc = split * isNotUndefined(multis[ref], 1);
                if (currentRef.style) {
                    currentRef.style.height = `${calc}px`;
                } else {
                    const style = { height: `${calc}px` };
                    currentRef.style = style;
                }

            });
        };
    }, [offsetRefs, responsiveRefs, containerRef, offsetArr, responsiveArr, multis, trigger]);

    const updateResize = () => {
        setTrigger(Math.random(10));
    };

    useEffect(() => {
        window.addEventListener("resize", updateResize)
        return () => {
            window.removeEventListener('resize', updateResize);
        };
    }, []);

    useEffect(() => {
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
            const split = 100 / responsiveArr.length;
            const keys = Object.keys(multipliers);
            keys.forEach((key) => {
                if (multipliers[key]) {
                    // 50 / 100 * 3 + 1
                    // const multi = multipliers[key] / 100;
                    const multi = ((multipliers[key] / 100) * noMultiCount) + 1;
                    acumMulti += multi;
                    acumHeight += multi * split;
                    auxMultis[key] = multi;
                }
            });
            if (acumMulti <= length) {
                if (count === length) {
                    const arr = Object.entries(auxMultis);
                    let min = Number.POSITIVE_INFINITY
                    let key = "";
                    for (const value of arr) {
                        const aux = Math.min(min, value[1]);
                        key = aux !== min ? value[0] : key;
                        min = aux;
                    }
                    multipliers[key] = false;
                    count--;
                    acumHeight = acumHeight - (min * 100)
                }

                const calc = ((100 - acumHeight) / split) / noMultiCount;
                keys.forEach((key) => {
                    if (!multipliers[key]) {
                        auxMultis[key] = calc;
                    }
                });
                setMultis(auxMultis);
            } else {
                console.log("mas de 100")
            };
        }

    }, [multipliers, responsiveArr.length, height]);

    // const refs = { [responsive]: responsiveRefs, [container]: containerRef };
    return { ...offsetRefs, ...responsiveRefs, containerRef }
}

export default useResponsiveOffset