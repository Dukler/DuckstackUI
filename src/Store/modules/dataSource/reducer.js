import update from "immutability-helper";

const initialState = { isLoading: true };

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "SHOW_LOADING_ACTION":
            return update(state, {
                isLoading: { $set: payload.isLoading }
            })
        case "SET_POOL":
            return update(state, {
                componentsPool: { $set: payload }
            })
        case "INIT_DATA_SOURCE_SUCCEEDED":
            return update(state, {
                byIds: { $merge: payload }
            });
        // const { components, componentsPool } = { ...payload };
        // try {
        //     components.ids.forEach(cmp => {
        //         const lazyID = components.byIds[cmp].lazyID;
        //         components.byIds[cmp].AsyncImport = componentsPool[lazyID];
        //     });
        //     return components;
        // } catch (error) {
        //     console.log("error componentsinit");
        // }
        // break;
        default:
            return state;
    }
}