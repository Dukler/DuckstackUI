import { getWrapper } from "../../../Wrappers";
import reduceReducer from "reduce-reducers";
import { overlays } from "../common/overlays";

const initialState = []

const reducer = reduceReducer(
    wrappers,
    (state,action)=>overlays(state,action,"WRAPPER")
)
export default reducer

function wrappers(state = initialState, action) {
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const wrappers = {...action.payload.wrappers};
            wrappers.ids.forEach((cmp) => {
                const wrapper = wrappers.byIds[cmp];
                [wrapper.Wrapper, wrapper.isHtml] = getWrapper(wrapper);
            });
            return wrappers
        default:
            return state;
    }
}
