import { useEffect, useLayoutEffect, useState, createRef } from "react";
import { isNotNull } from "../Utils";
import memoizeOne from 'memoize-one';

const createRefs = (offsetArray) => {
    const aux = {};
    offsetArray.forEach((offset) => {
        aux[offset] = createRef();
    })
    return aux;
};
const memoRefs = memoizeOne(createRefs);

function useResponsiveOffset({ offsetArray, responsive, container }) {
    const [trigger, setTrigger] = useState();
    const [offsetRefs] = useState(memoRefs(offsetArray));
    const [responsiveRef] = useState(createRef());
    const [containerRef] = useState(createRef());

    useLayoutEffect(() => {
        let offset = 0;
        offsetArray.forEach(ref => {
            const currentRef = offsetRefs[ref].current;
            offset = offset + (isNotNull(currentRef) ? currentRef.getBoundingClientRect().height : 0);
        });
        if (responsiveRef.current && containerRef.current) {
            const total = containerRef.current.getBoundingClientRect().height - offset;
            responsiveRef.current.style.height = `${total}px`;
        };
    }, [containerRef, offsetArray, offsetRefs, responsiveRef, trigger]);

    const updateResize = () => {
        setTrigger(Math.random(10));
    };

    useEffect(() => {
        window.addEventListener("resize", updateResize)
        return () => {
            window.removeEventListener('resize', updateResize);
        };
    }, []);

    const refs = { [responsive]: responsiveRef, [container]: containerRef };
    return { ...offsetRefs, ...refs }
}

export default useResponsiveOffset