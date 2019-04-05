import update from "immutability-helper";

function wrapperReducer (state, action){
    switch(action.type){
        case "open":
            return update(state, {
                open: { $set: true } 
            });
        case "close":
            return update(state, {
                open: { $set: false }
            });
        default: 
            throw new Error();
    }

}

export default wrapperReducer;