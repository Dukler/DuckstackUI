import update from "immutability-helper";

export default function reducer(state, action) {
    switch (action.type) {
        case `OPEN`:
            return update(state, {open: {$set: true}});
        case `CLOSE`:
            return update(state, {open: {$set: false}});
        case `TOGGLE_OPEN`:
            return update(state, {open: {$set: !state.open}});
        case `TOGGLE_MOBILE_OPEN`:
            return update(state, {mobileOpen: {$set: !state.mobileOpen}});
        case `CLOSE_MOBILE`:
            return update(state, {mobileOpen: {$set: false}});
        default:
            return state;
    }
}
