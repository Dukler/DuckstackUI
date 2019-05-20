import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { orderList } from '../Utils';



function useDynamicList(props){

    const mapState = useCallback(
        state => ({
            wrapper: props.wrapper?state["wrappers"]["byIds"][props.wrapper.id]:null,
            list: state[props.element]["byIds"],
            order: state[props.element]["ids"],
        }),[props]
    );
    const { wrapper, list, order } = useMappedState(mapState);
    
    const filter = props.element === "linkList" ? wrapper.extProperties.linkList:
                props.wrapper?wrapper.components:
                props.components;

    const filtered = filter?filter.map(
            item=>list[item]
        ).filter(item=>item!==undefined):
    Object.values(list);

    if (props.element !== "contentRoutes" && filtered.length > 1)
        if (filter)
            orderList(filtered,filter)
            //filtered.sort((a, b)=> filter.indexOf(a.id) - filter.indexOf(b.id));
        else
            orderList(filtered, order)
            //filtered.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    
    return [filtered]
}

export default useDynamicList