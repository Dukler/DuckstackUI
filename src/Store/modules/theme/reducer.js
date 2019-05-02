import update from "immutability-helper";

const initialState = { paletteType: 'dark' }

export default function reducer(state = initialState, action){
    switch (action.type) {
        case 'HANDLE_THEME_TOGGLE':
            return update(state, {
                paletteType: { $set: state.paletteType === 'dark' ? 'light': 'dark'}
            });
        default:
            return state;
    }
}
