import { getWrapper } from "../Wrappers";
import wrapperReducer from "../Reducers/wrapperReducer"
import { useReducer } from "react";


function useComponentWrapper(props){
    const initialState = {
        open: false
    }
    const [state, dispatch] = useReducer(wrapperReducer, initialState)
    const [Wrapper, isHtml] = getWrapper(props.wrapper);
    const htmlAttributes = {}
    const wrapperProps = (isHtml) ? htmlAttributes : { state, dispatch };
    
    

    return [Wrapper, wrapperProps]
}

export default useComponentWrapper;