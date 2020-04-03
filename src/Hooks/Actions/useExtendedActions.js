//uses the actions declared in the "extProperties/actions" in the component
import useActions from "./useActions";
import {useEffect} from "react";
import {useRef} from "react";

export default function useExtendedActions(props) {
    const {actions} = props;
    const [actionDispatch] = useActions();
    const componentRef = useRef();

    useEffect(() => {
        //onMount filtered actions - once
        Object.entries(actions).forEach(([key, value]) => {
            const {subType, event, ...action} = value;
            console.log();
            switch (subType) {
                case "event":
                    componentRef.current.addEventListener(event, () => {
                        actionDispatch({
                            ...action
                        });
                    });
                    break;

                default:
                    actionDispatch({
                        ...action
                    });
                    break;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return componentRef;
}
