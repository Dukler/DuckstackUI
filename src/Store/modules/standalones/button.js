import {prepareJSON} from "../../../Utils/index";

export function button(state = [], action) {
    const {id, ...payload} = action.payload
        ? action.payload
        : {id: null, ...null};
    const suffix = `_BUTTON`;
    switch (action.type) {
        case `SUBMIT_JSON${suffix}`:
            const {post, filter} = payload;
            post(prepareJSON({state: state["byIds"], filter}));
            return state;
        default:
            return state;
    }
}
