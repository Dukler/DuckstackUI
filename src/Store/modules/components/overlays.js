import update from "immutability-helper";

export function overlays(state = [], action) {
    const { id } = action.payload ? action.payload : { id: null, ...null };
    switch (action.type) {
        case "OPEN":
            return update(state, {
                byIds: { [id]: { open: { $set: true } } }
            });
        case "CLOSE":
            return update(state, {
                byIds: { [id]: { open: { $set: false } } }
            });
        case "TOGGLE_OPEN":
            return update(state, {
                byIds: { [id]: { open: { $set: !state["byIds"][id].open } } }
            });
        case "TOGGLE_MOBILE_OPEN":
            return update(state, {
                byIds: { [id]: { mobileOpen: { $set: !state["byIds"][id].mobileOpen } } }
            });
        default:
            return state;
    }
}