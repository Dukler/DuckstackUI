import update from "immutability-helper";

export function textInput(state = [], action) {
    const {id, ...payload} = action.payload
        ? action.payload
        : {id: null, ...null};
    const target = payload.event ? payload.event.target : null;
    const suffix = `_TEXT_INPUT`;
    switch (action.type) {
        case `VALUE${suffix}`:
            return update(state, {
                byIds: {[id]: {value: {$set: target.value}}},
            });
        default:
            return state;
    }
}
