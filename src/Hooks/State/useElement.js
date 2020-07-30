import {useCallback} from "react";
// import { useMappedState } from 'redux-react-hook';
import {useSelector, shallowEqual} from "react-redux";

function useElement(element) {
    const mapState = useCallback(
        (state) => ({
            state: state[element],
        }),
        [element]
    );

    const {state} = useSelector(mapState, shallowEqual);

    return [state["byIds"], state[["ids"]]];
}

export default useElement;
