import update from "immutability-helper";
import AsyncComponent from './../../../BeLazy/AsyncComponent';



const initialState = [];

export default function reducer (state = initialState, action){
    //const [index, target] = (action.event) ? useFindIndex({ action, state }):[null,null];
    const target = action.event? action.event.target:null;
    switch (action.type) {
        case 'updateProperty':
            const property = action.property;
            return update(state, {
                byIds: {[action.id]:{[property]: {$set: action.value}}}
            });
        case 'inputValue':
            return update(state, {
                byIds: {[action.id]:{value: {$set: target.value}}}
            });
        // case 'addItem':
        //     const attributes = action.payload;
        //     if (index === -1) {
        //         let item = { ...attributes };
        //         item.AsyncImport = AsyncComponent({
        //             componentName: attributes.componentName
        //         });
        //         return update(state, {
        //             $push:item
        //         });
        //     }
        //     return state;
        case 'open':
            return update(state, {
                byIds: { [action.id]: { open: { $set: true } }}
            });
        case 'close':
            return update(state, {
                byIds: { [action.id]: { open: { $set: false } }}
            });
        case 'toggleOpen':
            return update(state, {
                byIds: { [action.id]: { open: { $set: !state["byIds"][action.id].open } }}
            });
        case 'setComponents':
            const components = action.payload;
            components.ids.forEach((cmp) => {
                components.byIds[cmp].AsyncImport = AsyncComponent({
                    componentName: components.byIds[cmp].componentName
                });
            });
            return action.payload;
        default:
            return state;
    }
}
