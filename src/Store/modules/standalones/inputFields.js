import update from "immutability-helper";

export function inputFields(state = [], action){
    const { id, ...payload } = action.payload ? action.payload : { id: null, ...null };
    const target = payload.event ? payload.event.target : null;
    switch(action.type){
        case "INPUT_VALUE":
            return update(state, {
                byIds: { [id]: { value: { $set: target.value } } }
            });
        default:
            return state;
    }
}