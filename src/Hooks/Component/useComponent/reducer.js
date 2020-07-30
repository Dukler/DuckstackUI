export default function reducer(state, action) {
    const {payload} = action;
    // console.log("asd");
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                isMounted: true,
            };
        case "UNMOUNT":
            return {
                ...state,
                isMounted: false,
            };
        case "UPDATE_ATTRIBUTE":
            return {
                ...state,
                [payload.attribute]: payload.value,
            };

        default:
            return state;
    }
}
