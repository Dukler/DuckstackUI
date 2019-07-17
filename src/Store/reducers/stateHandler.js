import update from "immutability-helper";

export function stateHandler(state = [], action, suffix = "") {
    const { id, ...payload } = action.payload
        ? action.payload
        : { id: null, ...null };

    const suf = suffix === "" ? "" : `_${suffix}`
    switch (action.type) {
        case `UPDATE${suf}`:
            return update(state, {
                byIds: { [id]: { $merge: payload } }
            });
        case `PUSH${suf}`:
            return update(state, {
                byIds: { $push: payload }
            });
        default:
            return state;
    }
}