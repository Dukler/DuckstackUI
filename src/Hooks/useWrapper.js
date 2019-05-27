import React from "react";
import { orderList } from "../Utils";

function useWrapper(props) {
	const ordList = orderList(props.list, props.order);

	let renders = {};
	props.parents.forEach(parent => {
		if (props.render[parent.id]) {
			const filter = props.render[parent.id].components;
			let list = [];
			list.push(...ordList.filter(item => filter.includes(item.id)));
			if (filter.includes("null")) {
				list.push({ id: "null" });
				list = orderList(list, filter);
			}
			renders[parent.id] = list.map(comp => {
				let ParentComponent = parent.component;
				if (comp.id === "null") {
					return <ParentComponent key={comp.id} />;
				} else {
					const { AsyncImport, ...cleanComp } = comp;
					if (
						props.parentByStyle &&
						cleanComp.styles != null &&
						typeof cleanComp.styles.name !== "undefined"
					) {
						ParentComponent =
							props.parentByStyle[cleanComp.styles.name];
					}
					return (
						<ParentComponent {...cleanComp.wrapper} key={comp.id}>
							<AsyncImport {...cleanComp} />
						</ParentComponent>
					);
				}
			});
		}
	});

	return [renders];
}

export default useWrapper;
