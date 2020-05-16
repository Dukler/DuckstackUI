import ContentRoute from "./../../../Component/Standalone/ContentRoute";
import reduceReducer from "reduce-reducers";
import {stateHandler} from "../../reducers/stateHandler";
import update from "immutability-helper";

const initialState = [];

const reducer = reduceReducer(routeReducer, (state, action) =>
    stateHandler(state, action, "ROUTE")
);
export default reducer;

function routeReducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_STANDALONE":
            return action.payload.treePosition.type === "route" &&
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
            const contentRoutes = {...action.payload.contentRoutes};
            contentRoutes.ids.forEach((cmp) => {
                contentRoutes.byIds[cmp].AsyncImport = ContentRoute;
            });
            return contentRoutes;
        default:
            return state;
    }
}
//{ standalones, containers, contentRoutes, linkList }
