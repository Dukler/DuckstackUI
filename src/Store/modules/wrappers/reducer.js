import { getWrapper } from "../../../Wrappers";
import reduceReducer from "reduce-reducers";
import { overlays } from "../common/overlays";

const initialState = []

const reducer = reduceReducer(
    wrappersReducer,
    (state,action)=>overlays(state,action,"WRAPPER")
)
export default reducer

function wrappersReducer(state = initialState, action) {
    switch (action.type) {
        case "INIT_DATA_SUCCEEDED":
            const { wrappers, componentsPool } = { ...action.payload };
            //const wrappers = {...action.payload.wrappers};
            wrappers.ids.forEach((cmp) => {
                const wrapper = wrappers.byIds[cmp];
                const className = wrappers.byIds[cmp].className;
                [wrapper.Wrapper, wrapper.isHtml] = getWrapper({ wrapper, instance: componentsPool[className]});
            });
            return wrappers
        default:
            return state;
    }
}
