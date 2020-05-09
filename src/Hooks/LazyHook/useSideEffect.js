import {useEffect} from "react";
import {useDispatch} from "redux-react-hook";

//make this hook so it can do side effects based on linked values
export default function useSideEffect(state) {
    const dispatch = useDispatch();
    const {hooks} = state;

    useEffect(() => {
        if (hooks && hooks.SideEffect) {
            const {type, payload} = hooks.SideEffect;
            const {value, ...rest} = payload;
            dispatch({
                type,
                payload: {...rest, value: state[value]},
            });
        }
    }, [hooks, dispatch, state]);
    return null;
}
