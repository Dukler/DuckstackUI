
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";


function useComponentWrapper(props){
    const mapState = useCallback(
        state => ({
            state: state["wrappers"]["byIds"][props.wrapper]
        })
    );
    const { state } = useMappedState(mapState);
    const {Wrapper} = state;
    const wrapperProps = null;
    //const [Wrapper, isHtml] = getWrapper(props.wrapper);
    //const htmlAttributes = {}
    //const wrapperProps = (state.isHtml) ? htmlAttributes : null;
    
    

    return [Wrapper, wrapperProps]
}

export default useComponentWrapper;