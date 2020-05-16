import {useContext} from "react";
import {useDispatch, StoreContext} from "redux-react-hook";
import actionReducer from "./reducer";
import {compose} from "redux";

function useActions(reducer) {
    const store = useContext(StoreContext);
    const dispatch = useDispatch();
    const actionDispatch = (props) =>
        compose(
            actionReducer({
                state: store.getState(),
                ...props,
            }),
            reducer(props),
            dispatch(props)
        );
    return [actionDispatch];
}

export default useActions;
