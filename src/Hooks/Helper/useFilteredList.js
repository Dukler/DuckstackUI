import {useMemo, useRef, useContext} from "react";
import {StoreContext} from "redux-react-hook";

function useFilteredList(props) {
    const store = useContext(StoreContext);
    const state = store.getState();
    // const filter = props.filter ? props.filter : [];
    const filter = props.filter ? props.filter : [];
    // const [list] = useElement(element);
    console.log();
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
