import {initContainer} from "../../../Component/Container";
import reduceReducer from "reduce-reducers";
import {overlays} from "./overlays";
import update from "immutability-helper";

const initialState = [];

const reducer = reduceReducer(containersReducer, (state, action) =>
    overlays(state, action, "CONTAINER")
);
export default reducer;

function containersReducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_STANDALONE":
            return action.payload.treePosition.type === "container" &&
                !state.byIds[
                    action.payload.treePosition.id
                ].standalones.includes(action.payload.id)
                ? update(state, {
                      byIds: {
                          [action.payload.treePosition.id]: {
                              standalones: {$push: [action.payload.id]},
                          },
                      },
                  })
                : state;
        case "INIT_DATA_SUCCEEDED":
            const {containers, componentsPool} = {...action.payload};
            try {
                if (containers.ids) {
                    containers.ids.forEach((cmp) => {
                        const container = containers.byIds[cmp];
                        container.type = "container";
                        const lazyID = containers.byIds[cmp].lazyID;
                        [
                            container.LazyContainer,
                            container.isHtml,
                        ] = initContainer({
                            container,
                            instance: componentsPool[lazyID],
                        });
                    });
                }
            } catch (error) {
                console.log("error containersinit");
            }
            return containers;
        case "UPDATE_CONTAINER":
            console.log();
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
