import reduceReducer from "reduce-reducers";
import {textInput} from "./textInput";
import {button} from "./button";
import {picker} from "./picker";
import {stateHandler} from "../../reducers/stateHandler";
import update from "immutability-helper";
import LazyComponent from "./../../../BeLazy/LazyComponent";
import {isUndefined} from "./../../../Utils/index";

const initialState = [];

const reducer = reduceReducer(
    standalonesReducer,
    textInput,
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
        case "ADD_DISPATCHER":
            if (state.ids.includes(id)) {
                return update(state, {
                    byIds: {
                        [id]: {
                            dispatch: {
                                $set: payload.dispatch,
                            },
                        },
                    },
                });
            }
            return state;
        case "TOGGLE_DISABLE_STANDALONE":
            if (state.ids.includes(id)) {
                return update(state, {
                    byIds: {
                        [id]: {
                            disabled: {
                                $set: !isUndefined(
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
        case "DELETE_STANDALONE_SUCCEEDED":
            if (state.ids.includes(id)) {
                const index = state.ids.indexOf(id);
                const {[id]: value, ...withoutStantalone} = state.byIds;
                return update(state, {
                    byIds: {$set: withoutStantalone},
                    ids: {$splice: [[index, 1]]},
                });
            } else {
                return state;
            }
        case "NEW_STANDALONE_SUCCEEDED":
            const {pool, ...compAttributes} = action.payload;
            const {component, ...styles} = compAttributes.styles;
            const top = isUndefined(component.top, 0);
            const left = isUndefined(component.left, 0);
            const position = isUndefined(component.position, "absolute");
            component.top = top < 0 ? 0 : top;
            component.left = left < 0 ? 0 : left;
            component.position = position;
            compAttributes.type = "standalone";
            compAttributes.systemInfo.newComponent = true;
            return update(state, {
                ids: {$push: [id]},
                byIds: {
                    $merge: {
                        [id]: {
                            AsyncImport: isUndefined(
                                pool[compAttributes.lazyID],
                                LazyComponent({
                                    root: "Standalone",
                                    className: compAttributes.lazyID,
                                })
                            ),
                            ...compAttributes,
                            styles: {
                                component,
                                ...styles,
                            },
                        },
                    },
                },
            });

        case "INIT_DATA_SUCCEEDED":
            const {standalones, componentsPool} = {...payload};
            try {
                standalones.ids.forEach((cmp) => {
                    const lazyID = standalones.byIds[cmp].lazyID;
                    // const augParams = {
                    //     ...standalones.byIds[cmp].params,
                    //     ref: React.createRef(),
                    // };
                    // const augSystem = {
                    //     ...standalones.byIds[cmp].systemInfo,
                    //     path: "/Standalone/" + standalones.byIds[cmp].lazyID,
                    // };
                    standalones.byIds[cmp].AsyncImport = componentsPool[lazyID];
                    // standalones.byIds[cmp].params = augParams;
                    standalones.byIds[cmp].type = "standalone";
                    standalones.byIds[cmp].reducer =
                        componentsPool[lazyID].reducer;
                    standalones.byIds[cmp].value = standalones.byIds[cmp].value
                        ? standalones.byIds[cmp].value
                        : "";
                    // standalones.byIds[cmp].systemInfo = augSystem;
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
