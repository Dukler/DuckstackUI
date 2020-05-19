import reduceReducer from "reduce-reducers";
import {textInput} from "./textInput";
import {button} from "./button";
import {picker} from "./picker";
import {stateHandler} from "../../reducers/stateHandler";
import {overlays} from "./../containers/overlays";
import update from "immutability-helper";
import LazyComponent from "./../../../BeLazy/LazyComponent";
import {isNotUndefined} from "./../../../Utils/index";

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
        case "TOGGLE_DISABLE_STANDALONE":
            if (state.ids.includes(id)) {
                return update(state, {
                    byIds: {
                        [id]: {
                            disabled: {
                                $set: !isNotUndefined(
                                    state.byIds[id].disabled,
                                    false
                                ),
                            },
                        },
                    },
                });
            } else {
                return state;
            }
        case "NEW_STANDALONE":
            if (!state.ids.includes(id)) {
                console.log();
                const {treePosition, ...compAttributes} = action.payload;
                const {component, ...styles} = compAttributes.styles;
                const top = isNotUndefined(component.top, 0);
                const left = isNotUndefined(component.left, 0);
                const position = isNotUndefined(component.position, "absolute");
                component.top = top < 0 ? 0 : top;
                component.left = left < 0 ? 0 : left;
                component.position = position < 0 ? 0 : position;
                return update(state, {
                    ids: {$push: [id]},
                    byIds: {
                        $merge: {
                            [id]: {
                                AsyncImport: LazyComponent({
                                    root: "Standalone",
                                    className: compAttributes.lazyID,
                                }),
                                ...compAttributes,
                                extProperties: {
                                    ...compAttributes.extProperties,
                                },
                                styles: {
                                    component,
                                    ...styles,
                                },
                            },
                        },
                    },
                });
            } else {
                return state;
            }
        case "INIT_DATA_SUCCEEDED":
            const {standalones, componentsPool} = {...payload};
            try {
                standalones.ids.forEach((cmp) => {
                    const lazyID = standalones.byIds[cmp].lazyID;
                    standalones.byIds[cmp].AsyncImport = componentsPool[lazyID];
                    standalones.byIds[cmp].type = "standalone";
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
