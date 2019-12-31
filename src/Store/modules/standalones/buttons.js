import { prepareJSON } from '../../../Utils/index';

export function buttons(state = [], action) {
    const { id, ...payload } = action.payload ? action.payload : { id: null, ...null };
    switch (action.type) {
        case "SUBMIT_JSON":
            const { post, filter } = payload;
            post(
                prepareJSON({ state: state["byIds"], filter })
            )
            return state;
        default:
            return state;
    }
}