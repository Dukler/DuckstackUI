import reduceReducer from "reduce-reducers";
import {textInput} from "./textInput";
import {button} from "./button";
import {picker} from "./picker";
import {stateHandler} from "../../reducers/stateHandler";
import {overlays} from "./../containers/overlays";
import update from "immutability-helper";

const initialState = [];

const reducer = reduceReducer(
    standalonesReducer,
    textInput,
    overlays,
    button,
    (state, action) => stateHandler(state, action, "COMPONENT"),
    picker
);
export default reducer;

function standalonesReducer(state = initialState, action) {
    const {id, ...payload} = action.payload
        ? action.payload
        : {id: null, ...null};
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const {standalones, componentsPool} = {...payload};
            try {
                standalones.ids.forEach((cmp) => {
                    const lazyID = standalones.byIds[cmp].lazyID;
                    standalones.byIds[cmp].AsyncImport = componentsPool[lazyID];
                    standalones.byIds[cmp].value = standalones.byIds[cmp].value
                        ? standalones.byIds[cmp].value
                        : "";
                });
                return standalones;
            } catch (error) {
                console.log("error standalonesinit");
            }
            break;
        case "UPDATE_STANDALONE":
            return update(state, {
                byIds: {[id]: {[payload.attribute]: {$set: payload.value}}},
            });
        default:
            return state;
    }
}
