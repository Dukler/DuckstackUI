

export function buttons(state = [], action) {
    const { id, ...payload } = action.payload ? action.payload : { id: null, ...null };
    switch (action.type) {
        case "SUBMIT_JSON":
            const { post, filter, prepareJSON } = payload;
            post(
                prepareJSON({ state, filter })
            )
            return state;
        default:
            return state;
    }
}