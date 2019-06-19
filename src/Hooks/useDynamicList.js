import { useCallback, useState, useEffect } from 'react';
import { useMappedState } from 'redux-react-hook';
import { orderList } from '../Utils';



function useDynamicList(props) {
    const [filtered, setFiltered] = useState([]);
    const [dynamicList, setDynamicList] = useState([]);

    const mapState = useCallback(
        state => ({
            wrapper: props.wrapper ? state["wrappers"]["byIds"][props.wrapper.id] : null,
            list: state[props.element]["byIds"],
            order: state[props.element]["ids"],
        }), [props]
    );
    const { wrapper, list, order } = useMappedState(mapState);

    const filter = props.element === "linkList" ? wrapper.extProperties.linkList :
        props.wrapper ? wrapper.components : props.components;


    useEffect(() => {
        const aux = filter ? filter.map(
            item => list[item]
        ).filter(item => item !== undefined) : Object.values(list);
        setFiltered(aux);
        setDynamicList(aux);
    }, [filter, list]);

    useEffect(() => {
        if (props.element !== "contentRoutes" && filtered.length > 1)
            if (filter)
                setDynamicList(orderList(filtered, filter));
            else
                setDynamicList(orderList(filtered, order));
    }, [filter, filtered, order, props.element]);



    return [dynamicList]
}

export default useDynamicList