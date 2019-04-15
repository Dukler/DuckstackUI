import { getWrapper } from "../Wrappers";
import { useCallback } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";


function useComponentWrapper(props){
    const mapState = useCallback(
        state => ({
            state: state["wrappers"][props.wrapper]
        })
    )
    const { state } = useMappedState(mapState);
    const dispatch = useDispatch();
    
    const [Wrapper, isHtml] = getWrapper(props.wrapper);
    const htmlAttributes = {}
    const wrapperProps = (isHtml) ? htmlAttributes : { state, dispatch };
    
    

    return [Wrapper, wrapperProps]
}

export default useComponentWrapper;