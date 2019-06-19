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

export const orderList = (list, order) => {
    const aux = Array.isArray(list) ? [...list] : Object.values({ ...list });
    return aux.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
}

export const isNotUndefined = (object, returnValue) => {
    return (typeof object !== 'undefined') ? object : returnValue ? returnValue : null;
}

export const isNotNull = (object, returnValue) => {
    return (object !== null) ? object : returnValue ? returnValue : false;
}