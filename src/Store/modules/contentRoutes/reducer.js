import ContentRoute from "./../../../Component/Standalone/ContentRoute";
import reduceReducer from "reduce-reducers";
import {stateHandler} from "../../reducers/stateHandler";

import {
    subtractComponent,
    addComponent,
} from "./../../commonFunctions/stateEdit";

const initialState = [];

const reducer = reduceReducer(routeReducer, (state, action) =>
    stateHandler(state, action, "ROUTE")
);
export default reducer;

function routeReducer(state = initialState, action) {
    const {systemInfo} = action.payload ? action.payload : {...null};
    const {treePosition} = systemInfo ? systemInfo : {...null};
    switch (action.type) {
        case "SUBTRACT_COMPONENT":
            return subtractComponent(
                treePosition,
                state,
                action,
                "contentRoutes"
            );
        case "ADD_COMPONENT":
            return addComponent(treePosition, state, action, "contentRoutes");
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
