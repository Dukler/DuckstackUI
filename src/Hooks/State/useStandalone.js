import useClassState from "./useClassState";
import {useDispatch} from "react-redux";

function useStandalone(id) {
    const state = useClassState({id, element: "standalones"});

    const dispatch = useDispatch();

    return [state, dispatch];
}

export default useStandalone;
