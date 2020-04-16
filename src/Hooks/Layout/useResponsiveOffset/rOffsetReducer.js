import update from "immutability-helper";

export function rOffsetReducer(state = {}, action) {
    // const {id} = action.payload ? action.payload : {id: null, ...null};
    switch (action.type) {
        case `SET_TRIGGER`:
            return update(state, {
                trigger: {$set: Math.random(10)},
            });
        case `SET_MULTIS`:
            return update(state, {
                multis: {$set: action.payload},
            });
        case `SET_CONTAINERHEIGHT`:
            return update(state, {
                containerHeight: {$set: action.payload},
            });
        default:
            return state;
    }
}
