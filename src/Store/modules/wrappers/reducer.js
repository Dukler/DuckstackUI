const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'setWrappers':
            //recursiveImport(action.payload);
            return action.payload
        default:
            return state;
    }
}
