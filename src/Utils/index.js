export const prepareJSON = ({ state, filter }) => {
    let result = {}
    const filtered = Object.keys(state)
        .filter(key => filter.includes(key))
        .reduce((obj, key) => {
            obj[key] = state[key];
            return obj;
        }, {});
    Object.values(filtered).forEach((item) => {
        result[item.id] = item.value
    })

    return result
}

