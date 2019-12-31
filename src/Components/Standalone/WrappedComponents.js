import React from "react";
import useClassState from "../../Hooks/useClassState";
import DynamicComponents from "../../BeLazy/DynamicComponents";
import useFilteredList from "../../Hooks/useFilteredList";

function WrappedComponents(props) {
	const { container } = props;
	const containerState = useClassState({
		id: container.id,
		element: "containers"
	});
	const isList = containerState.components.length > 1 ? true : false;
	const componentsState = useFilteredList({
		filter: containerState.components,
		element: "components"
	});
	const { LazyContainer, extProperties, isHtml } = containerState;
	const { AsyncImport, ...cleanComp } = !isList
		? componentsState[containerState.components[0]]
		: { ...null };
	const containerProps = isHtml
		? { ...extProperties }
		: { componentsState, containerState };
	return (
		<LazyContainer {...containerProps}>
			{isList ? (
				<DynamicComponents element="components" container={container} />
			) : (
					<AsyncImport key={cleanComp.id} {...cleanComp} />
				)}
		</LazyContainer>
	);
};

export default WrappedComponents;
