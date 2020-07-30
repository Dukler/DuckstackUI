export default function reducer(state = {}, action) {
    switch (action.type) {
        // case "TEST":
        //     console.log("puto");
        //     return state;
        case "UPDATE_VALUE":
            return {...state, value: action.payload.event.target.value};

        default:
            return state;
    }
}
