import update from "immutability-helper";

const initialState = { darkTheme: true }

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'handleThemeToggle':
            //action.event.persist();
            return update(state, {
                darkTheme: {$set: ! state.darkTheme}
            });
        default:
            return state;
    }
}
