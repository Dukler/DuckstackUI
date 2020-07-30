import {initContainer} from "../../../Component/Container";
import update from "immutability-helper";
import {
    subtractComponent,
    addComponent,
} from "./../../commonFunctions/stateEdit";
import {isUndefined} from "./../../../Utils/index";
import LazyComponent from "./../../../BeLazy/LazyComponent";

const initialState = [];

// const reducer = reduceReducer(containersReducer, (state, action) =>
//     overlays(state, action, "CONTAINER")
// );
const reducer = containersReducer;
export default reducer;

function containersReducer(state = initialState, action) {
    const {id, ...payload} = action.payload ? action.payload : {...null};
    const {systemInfo} = action.payload ? action.payload : {...null};
    const {treePosition} = systemInfo ? systemInfo : {...null};
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

        case "NEW_CONTAINER_SUCCEEDED":
            const {pool, ...compAttributes} = payload;
            const {component, ...styles} = compAttributes.styles;
            const top = isUndefined(component.top, 0);
            const left = isUndefined(component.left, 0);
            const position = isUndefined(component.position, "absolute");
            component.top = top < 0 ? 0 : top;
            component.left = left < 0 ? 0 : left;
            component.position = position;
            compAttributes.type = "container";
            let auxInit;
            const auxContainer = {
                ...compAttributes,
            };
            [auxInit.LazyContainer, auxInit.isHtml] = initContainer({
                auxContainer,
                instance: isUndefined(
                    pool[compAttributes.lazyID],
                    LazyComponent({
                        root: "Container",
                        className: compAttributes.lazyID,
                    })
                ),
            });
            return update(state, {
                ids: {$push: [id]},
                byIds: {
                    $merge: {
                        [id]: {
                            LazyContainer: LazyComponent({
                                root: "Container",
                                className: compAttributes.lazyID,
                            }),
                            ...compAttributes,
                            styles: {
                                component,
                                ...styles,
                            },
                        },
                    },
                },
            });

        case "SUBTRACT_COMPONENT":
            return subtractComponent(treePosition, state, action, "containers");
        case "ADD_COMPONENT":
            return addComponent(treePosition, state, action, "containers");
        case "INIT_DATA_SUCCEEDED":
            const {containers, componentsPool} = {...action.payload};
            try {
                if (containers.ids) {
                    containers.ids.forEach((cmp) => {
                        const container = containers.byIds[cmp];
                        container.type = "container";

                        const lazyID = container.lazyID;
                        [
                            container.LazyContainer,
                            container.isHtml,
                        ] = initContainer({
                            container,
                            instance: componentsPool[lazyID],
                        });
                        container.dispatch = null;
                    });
                }
            } catch (error) {
                console.log("error containersinit");
            }
            return containers;
        case "UPDATE_CONTAINER":
            return update(state, {
                byIds: {
                    [action.payload.id]: {
                        [action.payload.attribute]: {
                            $set: action.payload.value,
                        },
                    },
                },
            });
        default:
            return state;
    }
}
