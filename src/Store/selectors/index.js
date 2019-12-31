const getContainersState = state => state.containers
const getComponentsState = state => state.components

export const getContainer = ({ state, id }) => {
    // console.log("getContainer", state, id)
    return getContainersState(state).byIds[id]
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