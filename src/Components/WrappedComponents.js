import React from "react";
import useClassState from "../Hooks/useClassState";
import DynamicComponents from "../BeLazy/DynamicComponents";
import useFilteredList from "../Hooks/useFilteredList";

const WrappedComponents = React.memo(function WrappedComponents(props) {
	const { wrapper } = props;
	const wrapperState = useClassState({
		id: wrapper.id,
		element: "wrappers"
	});
	const isList = wrapperState.components.length > 1 ? true : false;
	const componentsState = useFilteredList({
		filter: wrapperState.components,
		element: "components"
	});
	const { LazyWrapper, extProperties, isHtml } = wrapperState;
	const { AsyncImport, ...cleanComp } = !isList
		? componentsState[wrapperState.components[0]]
		: { ...null };
	const wrapperProps = isHtml
		? { ...extProperties }
		: { componentsState, wrapperState };
	return (
		<LazyWrapper {...wrapperProps}>
			{isList ? (
				<DynamicComponents element="components" wrapper={wrapper} />
			) : (
				<AsyncImport key={cleanComp.id} {...cleanComp} />
			)}
		</LazyWrapper>
	);
});

export default WrappedComponents;
