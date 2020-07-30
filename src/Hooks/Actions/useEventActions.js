//uses the actions declared in the "extProperties/actions" in the component
import useActions from "./useActions";
import {useEffect} from "react";
import {useRef} from "react";

export default function useEventActions(props) {
    const {actions} = props;
    const [actionDispatch] = useActions(props.reducer);
    const componentRef = useRef();

    useEffect(() => {
        //onMount filtered actions - once
        actions.forEach((action) => {
            const eventName = Object.keys(action)[0];
            const events = action[eventName];
            events.forEach((event) => {
                componentRef.current.addEventListener(eventName, () => {
                    actionDispatch({
                        ...event,
                    });
                });
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return componentRef;
}
