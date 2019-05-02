import { getWrapper } from "../../../Wrappers";

const initialState = []

export default function reducer(state = initialState, action) {
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
