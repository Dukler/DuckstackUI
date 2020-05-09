import update from "immutability-helper";

export function picker(state = [], action) {
    const suffix = `_PICKER`;
    const {id, ...payload} = action.payload
        ? action.payload
        : {id: null, ...null};
    switch (action.type) {
        case `SELECTED${suffix}`:
            return update(state, {
                byIds: {[id]: {value: {$set: payload.selected}}},
            });
        // return update(state, {
        //     byIds: {[id]: {$set: payload}},
        // });
        default:
            return state;
    }
}
