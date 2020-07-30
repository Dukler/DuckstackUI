import {useCallback} from "react";
// import {useMappedState} from "redux-react-hook";
import {useSelector, shallowEqual} from "react-redux";

export default function useComponentState({id}) {
    const mapState = useCallback(
        (state) => ({
            container: state["containers"]["byIds"][id],
            standalone: state["standalones"]["byIds"][id],
        }),
        [id]
    );

    const {container, standalone} = useSelector(mapState, shallowEqual);

    const componentState = {
        ...container,
        ...standalone,
    };
    const isContainer = container ? true : false;

    return [componentState, isContainer];
}
