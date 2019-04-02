import update from "immutability-helper";


function rootReducer (state, action){
    switch (action.type) {
        case 'handleDrawerToggle':
            //action.event.persist();
            //return { mobileOpen: ! state.mobileOpen };
            return update(state, {
                mobileOpen: {$set: ! state.mobileOpen}
            });
        case 'handleThemeToggle':
            //action.event.persist();
            return update(state, {
                darkTheme: {$set: ! state.darkTheme}
            });
        default:
            throw new Error();
    }
}

export default rootReducer
