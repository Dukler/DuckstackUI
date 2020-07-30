import {useReducer, useEffect} from "react";
import {useDispatch} from "react-redux";
import useStateChange from "../../LazyHook/useStateChange";
import reduceReducer from "reduce-reducers";
import defaultReducer from "./reducer";

export default function useComponent(props) {
    const {reducer, init, ...initialState} = props;
    console.log();
    const actualReducer = reduceReducer(
        defaultReducer,
        reducer
        // (state, action) => {
        //     if (state && state.isMounted) {
        //         return reducer(state, action);
        //     } else if (action.type === "INIT") {
        //         return {
        //             ...state,
        //             isMounted: true,
        //         };
        //     } else {
        //         return reducer(state, {});
        //     }
        // }
        // state && state.isMounted
        //     ? reducer(state, action)
        //     : reducer(state, {})
    );

    const [state, dispatch] = useReducer(actualReducer, initialState, init);
    const storeDispatch = useDispatch();
    useStateChange(state);
    //make it so when this is mounted then you can dispatch, else you do nothing. if clause wrapping the reducer function.

    // useEffect(() => {
    //     if (props.onStateChange) {
    //         props.onStateChange(state);
    //     }
    // }, [state]);

    useEffect(() => {
        storeDispatch({
            type: "ADD_DISPATCHER",
            payload: {id: props.id, dispatch},
        });
        dispatch({
            type: "INIT",
        });
        return () => {
            storeDispatch({
                type: "ADD_DISPATCHER",
                payload: {id: props.id, dispatch: null},
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [state, dispatch];
}
