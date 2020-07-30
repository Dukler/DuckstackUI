import React, {useEffect} from "react";
import DynamicComponents from "../BeLazy/DynamicComponents";
import useFilteredList from "../Hooks/Helper/useFilteredList";
import RenderComponent from "./RenderComponent";

function ContainerSuper(props) {
    // const {container} = props;
    const containerState = props;
    const isList = containerState.components.length > 1 ? true : false;
    const componentsState = useFilteredList({
        filter: containerState.components,
    });
    const {LazyContainer, extProperties, isHtml} = containerState;

    const component = !isList
        ? componentsState[containerState.components[0]]
        : {...null};

    const containerProps = isHtml
        ? {...extProperties}
        : {componentsState, containerState};

    // useStateChange(containerState);

    useEffect(() => {
        // return () => {
        //     cleanup
        // }
    }, []);

    return (
        <LazyContainer {...containerProps}>
            {isList ? (
                <DynamicComponents
                    element="standalones"
                    components={props.components}
                />
            ) : (
                <RenderComponent key={component.id} {...component} />
            )}
        </LazyContainer>
    );
}

export default ContainerSuper;
