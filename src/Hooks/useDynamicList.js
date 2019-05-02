import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';



function useDynamicList(props){

    const mapState = useCallback(
        state => ({
            wrapper: props.wrapper?state["wrappers"]["byIds"][props.wrapper]:null,
            list: state[props.element]["byIds"],
            order: state[props.element]["ids"],
        }),[props]
    );
    const { wrapper, list, order } = useMappedState(mapState);
    
    const filter = props.element==="linkList"?wrapper.linkList:
                props.wrapper?wrapper.components:
                props.components;

    const filtered = filter?filter.map(
            item=>list[item]
        ).filter(item=>item!==undefined):
    Object.values(list);

    if (props.element !== "contentRoutes" && filtered.length > 1)
        if (filter)
            filtered.sort((a, b)=> filter.indexOf(a.id) - filter.indexOf(b.id));
        else
            filtered.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    
    return [filtered]
}

export default useDynamicList