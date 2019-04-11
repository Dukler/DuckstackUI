import { recursiveImport } from "../..";

const initialState = []

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'setContent':
            // action.payload.forEach((cmp) => {
            //     cmp.AsyncImport = AsyncComponent({
            //         componentName: cmp.componentName
            //     });
            //     cmp.contentFilter = (cmp.contentFilter) ? cmp.contentFilter : "";
            //     //cmp.contentFilter = (typeof cmp.contentFilter === "undefined") ? "" : cmp.contentFilter;
            // })
            recursiveImport(action.payload);
            return action.payload
        default:
            return state;
    }
}
