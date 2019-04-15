//import { recursiveImport } from "../..";
import ListedLink from './../../../Components/ListedLink';

const initialState = []

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'setLinkList':
            //recursiveImport(action.payload);
            const components = action.payload;
            components.forEach((cmp) => {
                cmp.AsyncImport = ListedLink;
            })
            return action.payload
        default:
            return state;
    }
}
