import {useCallback} from "react";
import {useMappedState} from "redux-react-hook";

export default function useComponentState({id}) {
    const mapState = useCallback(
        (state) => ({
            container: state["containers"]["byIds"][id],
            standalone: state["standalones"]["byIds"][id],
        }),
        [id]
    );

    const {container, standalone} = useMappedState(mapState);

    const [componentState, isContainer] = container
        ? [container, true]
        : [standalone, false];

    return [componentState, isContainer];
}
