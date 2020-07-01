export const logger = (store) => (next) => (action) => {
    switch (action.type) {
        case "NEW_CONTAINER_STANDALONES":
            console.log("fuckpussy");
            break;
        default:
            break;
    }
    console.log("dispatching", action);
    let result = next(action);
    // console.log("next state", store.getState());
    return result;
};
