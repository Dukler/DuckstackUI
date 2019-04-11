import  { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';


function useDynamicList(props){
    //const {wrapper} = props
    const mapState = useCallback(
        state => ({
            wrapper: (props.wrapper)?state["wrappers"][props.wrapper]:null,
            list: state[props.className]
        })
    )
    const { wrapper, list } = useMappedState(mapState);
    
    const filter = (props.wrapper)?wrapper.components:props.components;

    const filtered = (filter)?list.filter(f => filter.includes(f.id)):list;
    
    
    return [filtered]
}

export default useDynamicList