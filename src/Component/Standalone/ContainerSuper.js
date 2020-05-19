import React from "react";
import DynamicComponents from "../../BeLazy/DynamicComponents";
import useFilteredList from "../../Hooks/Helper/useFilteredList";
import useSideEffect from "./../../Hooks/LazyHook/useSideEffect";

function ContainerSuper(props) {
    // const {container} = props;
    const containerState = props;
    const isList = containerState.standalones.length > 1 ? true : false;
    const standalonesState = useFilteredList({
        filter: containerState.standalones,
    });
    const {LazyContainer, extProperties, isHtml} = containerState;

    const {AsyncImport, ...cleanComp} = !isList
        ? standalonesState[containerState.standalones[0]]
        : {...null};

    const containerProps = isHtml
        ? {...extProperties}
        : {standalonesState, containerState};

    useSideEffect(containerState);
    console.log();
    return (
        <LazyContainer {...containerProps}>
            {isList ? (
                <DynamicComponents
                    element="standalones"
                    // container={{id: props.id}}
                    components={props.standalones}
                />
            ) : (
                <AsyncImport key={cleanComp.id} {...cleanComp} />
            )}
        </LazyContainer>
    );
}

export default ContainerSuper;
