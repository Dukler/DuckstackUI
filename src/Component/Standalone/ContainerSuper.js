import React from "react";
import useClassState from "../../Hooks/State/useClassState";
import DynamicComponents from "../../BeLazy/DynamicComponents";
import useFilteredList from "../../Hooks/Helper/useFilteredList";
import useSideEffect from "./../../Hooks/LazyHook/useSideEffect";

function ContainerSuper(props) {
    const {container} = props;
    const containerState = useClassState({
        id: container.id,
        element: "containers",
    });
    const isList = containerState.standalones.length > 1 ? true : false;
    const standalonesState = useFilteredList({
        filter: containerState.standalones,
        element: "standalones",
    });
    const {LazyContainer, extProperties, isHtml} = containerState;

    const {AsyncImport, ...cleanComp} = !isList
        ? standalonesState[containerState.standalones[0]]
        : {...null};

    const containerProps = isHtml
        ? {...extProperties}
        : {standalonesState, containerState};

    useSideEffect(containerState);

    return (
        <LazyContainer {...containerProps}>
            {isList ? (
                <DynamicComponents
                    element="standalones"
                    container={container}
                />
            ) : (
                <AsyncImport key={cleanComp.id} {...cleanComp} />
            )}
        </LazyContainer>
    );
}

export default ContainerSuper;
