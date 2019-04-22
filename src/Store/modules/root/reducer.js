import update from "immutability-helper";

const initialState = {isLoading:true};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case "SHOW_LOADING_ACTION":
            return update(state,{
                isLoading:{$set: action.payload.isLoading}
            })
        
        default:
            return state;
    }
}
