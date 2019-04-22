import update from "immutability-helper";
import AsyncComponent from './../../../BeLazy/AsyncComponent';


const initialState = [];

export default function reducer (state = initialState, action){
    const { id, ...payload } = action.payload ? action.payload:{id:null,...null};
    const target = payload.event ? payload.event.target : null;
    switch (action.type) {
        case "UPDATE":
            return update(state, {
                byIds: { [id]: { $merge: payload } }
            });
        case "UPDATE_PROPERTY":
            const property = action.property;
            return update(state, {
                byIds: { [id]: { [property]: {$set: payload.value} } }
            });
        case "INPUT_VALUE" :
            return update(state, {
                byIds: { [id]: { value: {$set: target.value} } }
            });
        case "OPEN":
            return update(state, {
                byIds: { [id]: { open: { $set: true } } }
            });
        case "CLOSE":
            return update(state, {
                byIds: { [id]: { open: { $set: false } }}
            });
        case "TOGGLE_OPEN":
            return update(state, {
                byIds: { [id]: { open: { $set: !state["byIds"][action.id].open } }}
            });
        case "TOGGLE_MOBILE_OPEN":
            return update(state, {
                byIds: { [id]: { mobileOpen: { $set: !state["byIds"][action.id].mobileOpen } } }
            });
        case "INIT_DATA_SUCCEEDED":
            const components = payload.components;
            components.ids.forEach((cmp) => {
                components.byIds[cmp].AsyncImport = AsyncComponent({
                    componentName: components.byIds[cmp].componentName
                });
            });
            return components;
        default:
            return state;
    }
}
