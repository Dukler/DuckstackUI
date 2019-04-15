//import { recursiveImport } from "../..";
import ContentRoute from './../../../Components/ContentRoute';

const initialState = []

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'setContent':
            //recursiveImport(action.payload);
            const components = action.payload;
            components.forEach((cmp) => {
                cmp.AsyncImport = ContentRoute;
            })
            return action.payload
        default:
            return state;
    }
}
