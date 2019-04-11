import update from "immutability-helper";

const initialState = { mobileOpen: false , open:false}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'toggleMobileOpen':
            //action.event.persist();
            //return { mobileOpen: ! state.mobileOpen };
            return update(state, {
                mobileOpen: {$set: ! state.mobileOpen}
            });
        case "open":
            return update(state, {
                open: { $set: true }
            });
        case "close":
            return update(state, {
                open: { $set: true }
            });
        case "toggleOpen":
            return update(state, {
                open: { $set: !state.open }
            });
        default:
            return state;
    }
}
