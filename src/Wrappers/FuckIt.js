import React from "react";
import { orderList } from "../Utils";

function FuckIt(props) {
	const { parents, parentName } = props;
	const filter = props.wrapperState.renderComponents[parentName].components;
	const ordList = orderList(props.list, filter);
	let list = [];

	list.push(...ordList.filter(item => filter.includes(item.id)));
	if (filter.includes("null")) {
		list.push({ id: "null" });
		list = orderList(list, filter);
	}
	return list.map(comp => {
		let ParentComponent = parents.default;
		if (comp.id === "null") {
			return <ParentComponent key={comp.id} />;
		} else {
			const { AsyncImport, ...cleanComp } = comp;
			if (
				props.parentByStyle &&
				cleanComp.styles != null &&
				typeof cleanComp.styles.name !== "undefined"
			) {
				ParentComponent = parents[cleanComp.styles.name];
			}
			return (
				<ParentComponent {...cleanComp.wrapper} key={comp.id}>
					<AsyncImport {...cleanComp} />
				</ParentComponent>
			);
		}
	});
}

export default FuckIt;
