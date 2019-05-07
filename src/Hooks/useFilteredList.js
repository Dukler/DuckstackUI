import useElement from "./useElement";
import { useMemo, useRef } from "react";



function useFilteredList(props) {
    const {filter, element} = props;
    const [list] = useElement(element);
    let refFiltered = useRef([]);
    let refResult = useRef({});
    //let result = {};

    useMemo(() => {
        refFiltered.current = Object.keys(list)
            .filter(key => filter.includes(key))
            .reduce((obj, key) => {
                obj[key] = list[key];
                return obj;
            }, {});
        Object.values(refFiltered.current).forEach((item) => {
            refResult.current[item.id] = item.value
        })
    }, [list, filter])
    // const filtered = Object.keys(list)
    //     .filter(key => filter.includes(key))
    //     .reduce((obj, key) => {
    //         obj[key] = list[key];
    //         return obj;
    //     }, {});
    // Object.values(filtered).forEach((item) => {
    //     result[item.name] = item.value
    // })

    return [refResult.current, refFiltered.current]
}

export default useFilteredList