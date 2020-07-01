const getContainersState = (state) => state.containers;
const getStandalonesState = (state) => state.standalones;
export const getComponentsPool = (state) => state.root.componentsPool;

export const getContainer = ({state, id}) => {
    return getContainersState(state).byIds[id];
};

export const getStandalone = ({state, id}) => {
    return getStandalonesState(state).byIds[id];
};

export const getStandalones = ({state, ids}) => {
    const list = getStandalonesState(state).byIds;
    return Object.keys(list)
        .filter((key) => ids.includes(key))
        .reduce((obj, key) => {
            obj[key] = list[key];
            return obj;
        }, {});
};

export const getStandalonesValues = ({state, ids}) => {
    const list = getStandalonesState(state).byIds;
    return Object.keys(list)
        .filter((key) => ids.includes(key))
        .reduce((obj, key) => {
            obj[key] = list[key].value;
            return obj;
        }, {});
};

// const mapState = useCallback(
//     state => ({
//         state: state[element]
//     }), [element]
// );
