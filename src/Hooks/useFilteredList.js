import useElement from "./useElement";
import { useMemo, useRef } from "react";



function useFilteredList(props) {
    const {filter, element} = props;
    const [list] = useElement(element);
    let refFiltered = useRef([]);

    useMemo(() => {
        refFiltered.current = Object.keys(list)
            .filter(key => filter.includes(key))
            .reduce((obj, key) => {
                obj[key] = list[key];
                return obj;
            }, {});
    }, [list, filter])

    return refFiltered.current
}

export default useFilteredList