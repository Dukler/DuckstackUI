import ContentRoute from './../../../Components/Standalone/ContentRoute';
import reduceReducer from "reduce-reducers";
import { stateHandler } from "../../reducers/stateHandler";
import update from "immutability-helper";

const initialState = [];



const reducer = reduceReducer(
    routeReducer,
    (state, action) => stateHandler(state, action, "ROUTE")
);
export default reducer;

function routeReducer(state = initialState, action) {
    const { id, ...payload } = action.payload
        ? action.payload
        : { id: null, ...null };
    switch (action.type) {
        case "ADD_ROUTE_COMPONENT":
            return update(state, {
                byIds: { [id]: { components: { $push: payload } } }
            });
        case "INIT_DATA_SUCCEEDED":
            const contentRoutes = { ...action.payload.contentRoutes };
            contentRoutes.ids.forEach((cmp) => {
                contentRoutes.byIds[cmp].AsyncImport = ContentRoute;
            });
            return contentRoutes;
        default:
            return state;
    }
}
//{ components, wrappers, contentRoutes, linkList }