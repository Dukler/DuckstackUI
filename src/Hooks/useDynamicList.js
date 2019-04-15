import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';



function useDynamicList(props){
    
    
    const mapState = useCallback(
        state => ({
            wrapper: props.wrapper?state["wrappers"][props.wrapper]["components"]:null,
            list: state[props.className],
            root: state["wrappers"]["root"]["components"]
        })
    )
    const { wrapper, list, root } = useMappedState(mapState);
    
    const filter = props.root?root:props.wrapper?wrapper:props.components;

    const filtered = filter?list.filter(f => filter.includes(f.id)):list;

    if (props.className === "components")
        filtered.sort((a,b)=> filter.indexOf(a.id) - filter.indexOf(b.id));
    
    return [filtered]
}

export default useDynamicList