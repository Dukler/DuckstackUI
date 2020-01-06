import { useEffect, useState, useCallback } from "react";



function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const updateDimensions = useCallback(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    },
        [setSize]
    );

    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [updateDimensions])

    return size
}

export default useWindowSize