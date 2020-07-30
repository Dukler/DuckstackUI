import {useMemo, useRef} from "react";
import {useSelector, shallowEqual} from "react-redux";

function useFilteredList(props) {
    const state = useSelector((state) => state, shallowEqual);
    const filter = props.filter ? props.filter : [];
    const list = {...state.standalones.byIds, ...state.containers.byIds};
    let refFiltered = useRef([]);

    useMemo(() => {
        refFiltered.current = Object.keys(list)
            .filter((key) => filter.includes(key))
            .reduce((obj, key) => {
                obj[key] = list[key];
                return obj;
            }, {});
    }, [list, filter]);

    return refFiltered.current;
}

export default useFilteredList;
