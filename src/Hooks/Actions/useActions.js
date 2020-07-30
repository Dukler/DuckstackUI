import {useSelector, shallowEqual} from "react-redux";
import actionReducer from "./reducer";
import {compose} from "redux";
import {useCallback} from "react";

function useActions(reducer) {
    // const store = useStore();
    const state = useSelector((state) => state, shallowEqual);
    const actionDispatch = useCallback(
        (props) => {
            compose(
                actionReducer({
                    state,
                    ...props,
                }),
                reducer(props)
            );
        },
        [reducer, state]
    );
    return [actionDispatch];
}

export default useActions;
