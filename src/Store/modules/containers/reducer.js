import { initContainer } from "../../../Components/Container";
import reduceReducer from "reduce-reducers";
import { overlays } from "../../reducers/overlays";

const initialState = [];

const reducer = reduceReducer(containersReducer, (state, action) =>
	overlays(state, action, "WRAPPER")
);
export default reducer;

function containersReducer(state = initialState, action) {
	switch (action.type) {
		case "INIT_DATA_SUCCEEDED":
			const { containers, componentsPool } = { ...action.payload };
			console.log()
			try {
				if (containers.ids) {
					containers.ids.forEach(cmp => {
						const container = containers.byIds[cmp];
						const lazyID = containers.byIds[cmp].lazyID;
						[container.LazyContainer, container.isHtml] = initContainer({
							container,
							instance: componentsPool[lazyID]
						});
					});
				}
			} catch (error) {
				console.log("error containersinit");
			}
			return containers;
		default:
			return state;
	}
}
