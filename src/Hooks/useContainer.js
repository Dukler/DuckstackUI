import React from "react";
import { orderList } from "../Utils";

const addEmptySpace = ({ filter, list }) => {
	let emptyList = list;
	if (filter.includes("empty")) {
		let i = 0;
		filter.forEach((item) => {
			if (item === "empty") {
				list.push({ id: "empty", key: "empty" + i });
				i++;
			}
		});
		emptyList = orderList(list, filter);
	}
	return emptyList
}

const getParentProps = ({ ParentComponent, comp }) => {
	return ParentComponent === React.Fragment
		? null
		: {
			...comp.container,
			styles: { ...comp.styles }
		};
}

function useContainer(props) {
	const order = props.containerState.components;
	const list = props.componentsState;
	const styleContainers = props.styleContainers;
	const render = props.containerState.renderComponents;
	const ordList = orderList(list, order);

	let renders = {};
	props.parents.forEach(parent => {
		if (render[parent]) {
			const filter = render[parent].components;
			let list = [];
			list.push(...ordList.filter(item => filter.includes(item.id)));
			list = addEmptySpace({ filter, list });
			renders[parent] = list.map(comp => {
				const { AsyncImport, ...cleanComp } = comp;
				if (comp.id === "empty") {
					return <styleContainers.Empty key={comp.key} />;
				}
				else if (
					comp.styles !== null && typeof comp.styles.name !== "undefined"
				) {
					const ParentComponent = styleContainers[comp.styles.name];
					const parentProps = getParentProps({ ParentComponent, comp })
					return (
						<ParentComponent key={comp.id} {...parentProps} >
							<AsyncImport {...cleanComp} />
						</ParentComponent>
					);
				} else {
					const ParentComponent = styleContainers.Default;
					const parentProps = getParentProps({ ParentComponent, comp })
					return (
						<ParentComponent key={comp.id} {...parentProps}>
							<AsyncImport {...cleanComp} />
						</ParentComponent>
					);
				}
			});
		}
	});

	return renders;
}

export default useContainer;
