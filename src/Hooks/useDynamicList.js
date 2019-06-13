import { useCallback, useState, useEffect } from 'react';
import { useMappedState } from 'redux-react-hook';
import { orderList } from '../Utils';



function useDynamicList(props) {
    const [filtered, setFiltered] = useState([])

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
        setFiltered(filter ? filter.map(
            item => list[item]
        ).filter(item => item !== undefined) : Object.values(list));
        if (props.element !== "contentRoutes" && filtered.length > 1)
            if (filter)
                setFiltered(orderList(filtered, filter));
            else
                setFiltered(orderList(filtered, order));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, list, order, props.element])






    return [filtered]
}

export default useDynamicList