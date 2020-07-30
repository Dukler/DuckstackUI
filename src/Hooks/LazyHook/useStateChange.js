// import {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
import useComponentState from "../State/useComponentState";
import {useEffect} from "react";

//this is a hook API that dispatches ---state.hooks.StateChange---
export default function useStateChange(state) {
    const {hooks} = state ? state : {};
    const hookID =
        hooks && hooks.StateChange ? hooks.StateChange.payload.id : null;
    const [stateToChange] = useComponentState({id: hookID});

    // useEffect(() => {
    //     effect
    // }, [input])

    useEffect(() => {
        console.log();
        if (hooks && hooks.StateChange && stateToChange.dispatch) {
            const {type, payload} = hooks.StateChange;
            const {value, attribute} = payload;

            stateToChange.dispatch({
                type,
                payload: {attribute, value: state[value]},
            });

            return () => {
                // clean = false;
                // cancelablePromise.cancel();
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hooks, state, stateToChange.dispatch, stateToChange.isMounted]);

    return;
}
