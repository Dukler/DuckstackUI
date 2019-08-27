const getWrappersState = state => state.wrappers
const getComponentsState = state => state.components

export const getWrapper = ({ state, id }) => {
    // console.log("getWrapper", state, id)
    return getWrappersState(state).byIds[id]
}

export const getComponents = ({ state, ids }) => {
    const list = getComponentsState(state).byIds
    return Object.keys(list)
        .filter(key => ids.includes(key))
        .reduce((obj, key) => {
            obj[key] = list[key];
            return obj;
        }, {});
}

export const getComponentsValues = ({ state, ids }) => {
    const list = getComponentsState(state).byIds
    return Object.keys(list)
        .filter(key => ids.includes(key))
        .reduce((obj, key) => {
            obj[key] = list[key].value;
            return obj;
        }, {});
}

// const mapState = useCallback(
//     state => ({
//         state: state[element]
//     }), [element]
// );