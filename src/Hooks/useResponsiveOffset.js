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
                currentRef.style.height = `${calc}px`;
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
        let auxFractions = {};
        let acumHeight = 0;
        let acumMulti = 0;
        let count = 0;
        const length = responsiveArr.length;
        const split = 100 / responsiveArr.length;
        const keys = Object.keys(multipliers);
        keys.forEach((key) => {
            if (multipliers[key]) {
                const multi = multipliers[key] / 100;
                acumMulti += multi;
                acumHeight += (1 + multi) * split
                count++;
                auxFractions[key] = 1 + multi;
            }
        });
        if (acumMulti <= 1) {
            const responsiveCount = length - count;
            const calc = ((100 - acumHeight) / split) / responsiveCount;
            keys.forEach((key) => {
                if (!multipliers[key]) {
                    auxFractions[key] = calc;
                }
            });
            setMultis(auxFractions);
        } else {
            console.log("mas de 100")
        };

    }, [multipliers, responsiveArr.length, height]);

    // const refs = { [responsive]: responsiveRefs, [container]: containerRef };
    return { ...offsetRefs, ...responsiveRefs, containerRef }
}

export default useResponsiveOffset