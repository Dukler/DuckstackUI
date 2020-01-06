import { useCallback, useState, useEffect } from 'react';
import { useMappedState } from 'redux-react-hook';
import { orderList } from '../../Utils';



function useDynamicList(props) {
    const [filtered, setFiltered] = useState([]);
    const [dynamicList, setDynamicList] = useState([]);

    const mapState = useCallback(
        state => ({
            container: props.container ? state["containers"]["byIds"][props.container.id] : null,
            list: state[props.element]["byIds"],
            order: state[props.element]["ids"],
        }), [props]
    );
    const { container, list, order } = useMappedState(mapState);


    const filter = props.element === "linkList" ? container.extProperties.linkList :
        props.container ? container.standalones : props.standalones;


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