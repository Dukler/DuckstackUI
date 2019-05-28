import React from "react";
import { orderList } from "../Utils";

function useWrapper(props) {
	const ordList = orderList(props.list, props.order);

	let renders = {};
	props.parents.forEach(parent => {
		if (props.render[parent]) {
			const filter = props.render[parent].components;
			let list = [];
			list.push(...ordList.filter(item => filter.includes(item.id)));
			if (filter.includes("null")) {
				list.push({ id: "null" });
				list = orderList(list, filter);
			}
			renders[parent] = list.map(comp => {
				let ParentComponent = props.styleContainers.Default;
				if (
					comp.styles != null &&
					typeof comp.styles.name !== "undefined"
				) {
					ParentComponent = props.styleContainers[comp.styles.name];
				}
				if (comp.id === "null") {
					ParentComponent = props.styleContainers.Null;
					return <ParentComponent key={comp.id} />;
				} else {
					const { AsyncImport, ...cleanComp } = comp;
					const parentProps =
						ParentComponent === React.Fragment
							? null
							: {
									...cleanComp.wrapper,
									styles: cleanComp.styles
							  };
					console.log();
					return (
						<ParentComponent key={comp.id} {...parentProps}>
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
