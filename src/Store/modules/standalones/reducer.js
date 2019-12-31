import reduceReducer from "reduce-reducers";
import { inputFields } from "./inputFields";
import { buttons } from "./buttons";
import { overlays } from "../../reducers/overlays";
import { stateHandler } from "../../reducers/stateHandler";

const initialState = [];

const reducer = reduceReducer(
	standalonesReducer,
	inputFields,
	overlays,
	buttons,
	(state, action) => stateHandler(state, action, "COMPONENT")
);
export default reducer;

function standalonesReducer(state = initialState, action) {
	const { id, ...payload } = action.payload
		? action.payload
		: { id: null, ...null };
	switch (action.type) {
		case "INIT_DATA_SUCCEEDED":
			const { standalones, componentsPool } = { ...payload };
			try {
				standalones.ids.forEach(cmp => {
					const lazyID = standalones.byIds[cmp].lazyID;
					standalones.byIds[cmp].AsyncImport = componentsPool[lazyID];
					standalones.byIds[cmp].value = standalones.byIds[cmp].value ? standalones.byIds[cmp].value : "";
				});
				return standalones;
			} catch (error) {
				console.log("error standalonesinit");
			}
			break;
		default:
			return state;
	}
}
