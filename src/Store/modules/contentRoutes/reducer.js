import ContentRoute from './../../../Components/ContentRoute';

const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const contentRoutes = action.payload.contentRoutes;
            contentRoutes.ids.forEach((cmp) => {
                contentRoutes.byIds[cmp].AsyncImport = ContentRoute;
            });
            return contentRoutes;
        default:
            return state;
    }
}
//{ components, wrappers, contentRoutes, linkList }