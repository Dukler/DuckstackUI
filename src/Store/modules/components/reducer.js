import reduceReducer from "reduce-reducers";
import { inputFields } from "./inputFields";
import { buttons } from "./buttons";
import { overlays } from "../../reducers/overlays";
import { stateHandler } from "../../reducers/stateHandler";

const initialState = [];

const reducer = reduceReducer(
	componentsReducer,
	inputFields,
	overlays,
	buttons,
	(state, action) => stateHandler(state, action, "COMPONENT")
);
export default reducer;

function componentsReducer(state = initialState, action) {
	const { id, ...payload } = action.payload
		? action.payload
		: { id: null, ...null };
	switch (action.type) {
		case "INIT_DATA_SUCCEEDED":
			const { components, componentsPool } = { ...payload };
			try {
				components.ids.forEach(cmp => {
					const lazyID = components.byIds[cmp].lazyID;
					components.byIds[cmp].AsyncImport = componentsPool[lazyID];
				});
				return components;
			} catch (error) {
				console.log("error componentsinit");
			}
			break;
		default:
			return state;
	}
}
