import update from "immutability-helper";

export function overlays(state = [], action, suffix = "") {
    const {id} = action.payload ? action.payload : {id: null, ...null};
    // const suffix =""
    const suf = suffix === "" ? "" : `_${suffix}`;
    switch (action.type) {
        case `OPEN${suf}`:
            return update(state, {
                byIds: {[id]: {open: {$set: true}}},
            });
        case `CLOSE${suf}`:
            return update(state, {
                byIds: {[id]: {open: {$set: false}}},
            });
        case `TOGGLE_OPEN${suf}`:
            return update(state, {
                byIds: {[id]: {open: {$set: !state["byIds"][id].open}}},
            });
        case `TOGGLE_MOBILE_OPEN${suf}`:
            return update(state, {
                byIds: {
                    [id]: {mobileOpen: {$set: !state["byIds"][id].mobileOpen}},
                },
            });
        case `CLOSE_MOBILE${suf}`:
            return update(state, {
                byIds: {[id]: {mobileOpen: {$set: false}}},
            });
        default:
            return state;
    }
}
