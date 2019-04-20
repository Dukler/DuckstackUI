import { getWrapper } from "../../../Wrappers";

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'setWrappers':
            //recursiveImport(action.payload);
            const wrappers = action.payload;
            wrappers.ids.forEach((cmp) => {
                const wrapper = wrappers.byIds[cmp];
                [wrapper.Wrapper, wrapper.isHtml] = getWrapper(wrapper.name);
            });

            // const keys = Object.keys(action.payload);
            // keys.forEach(key => {
            //     const wrapper = action.payload[key];
            //     [wrapper.Wrapper, wrapper.isHtml] = getWrapper(wrapper.Name);
            // });
            
            return action.payload
        default:
            return state;
    }
}
