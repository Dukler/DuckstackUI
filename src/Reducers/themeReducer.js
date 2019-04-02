import update from "immutability-helper";


function themeReducer (state, action){
    switch (action.type) {
        case 'handleThemeToggle':
            //action.event.persist();
            return update(state, {
                darkTheme: {$set: ! state.darkTheme}
            });
        default:
            throw new Error();
    }
}

export default themeReducer
