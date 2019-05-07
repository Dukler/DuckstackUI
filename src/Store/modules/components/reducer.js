import update from "immutability-helper";
import reduceReducer from "reduce-reducers";
import { inputFields } from "./inputFields";
import { buttons } from "./buttons";
import { overlays } from "../common/overlays";


const initialState = [];

const reducer = reduceReducer (
    componentsReducer,
    inputFields,
    overlays,
    buttons
)
export default reducer

function componentsReducer (state = initialState, action){
    const { id, ...payload } = action.payload ? action.payload:{id:null,...null};
    switch (action.type) {
        case "test":
            console.log("test worked");
            return state;
        case "UPDATE":
            return update(state, {
                byIds: { [id]: { $merge: payload } }
            });
        case "INIT_DATA_SUCCEEDED":
            const { components,  componentsPool } = {...payload};
            try {
                components.ids.forEach((cmp) => {
                    const className = components.byIds[cmp].className;
                    components.byIds[cmp].AsyncImport = componentsPool[className]
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
