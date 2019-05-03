import update from "immutability-helper";
import AsyncComponent from './../../../BeLazy/AsyncComponent';
import reduceReducer from "reduce-reducers";
import { inputFields } from "./inputFields";
import { buttons } from "./buttons";
import { overlays } from "../common/overlays";


const initialState = [];

const reducer = reduceReducer (
    components,
    inputFields,
    overlays,
    buttons
)
export default reducer

function components (state = initialState, action){
    const { id, ...payload } = action.payload ? action.payload:{id:null,...null};
    switch (action.type) {
        case "UPDATE":
            return update(state, {
                byIds: { [id]: { $merge: payload } }
            });
        case "INIT_DATA_SUCCEEDED":
            const components = {...payload.components};
            components.ids.forEach((cmp) => {
                components.byIds[cmp].AsyncImport = AsyncComponent({
                    className: components.byIds[cmp].className,
                    root:"Components"
                });
            });
            return components;
        default:
            return state;
    }
}
