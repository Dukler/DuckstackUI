import update from "immutability-helper";
import { recursiveImport } from "../..";
import AsyncComponent from './../../../BeLazy/AsyncComponent';

const initialState = [];

function useFindIndex({action,state}){
    const event = action.event;
    const target = event.target;
    let index = state.findIndex(item => item.id === target.id);
    return [index,target,event];
}

export default function reducer (state = initialState, action){
    const [index, target] = (action.event) ? useFindIndex({ action, state }):[null,null];
    switch (action.type) {
        case 'inputValue':
            return update(state, {
                [index]:  {value: {$set: target.value}}
            });
        case 'addItem':
            const attributes = action.payload;
            if (index === -1) {
                let item = { ...attributes };
                item.contentFilter = (item.contentFilter) ? item.contentFilter : "";
                item.AsyncImport = AsyncComponent({
                    componentName: attributes.componentName
                });
                return update(state, {
                    $push:item
                });
            }
            return state;
        case "open":
            return update(state, {
                [index]: { open: { $set: true } }
            });
        case "close":
            return update(state, {
                [index]: { open: { $set: false } }
            });
        case "toggleOpen":
            return update(state, {
                [index]: { open: { $set: !state[index].open } }
            });
        case 'setComponents':
            recursiveImport(action.payload);
            return action.payload
        default:
            return state;
    }
}
