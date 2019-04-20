import { useCallback } from 'react';
import { useMappedState, useDispatch} from 'redux-react-hook';



function useComponent(id){

    const mapState = useCallback(
        state => ({
            state: state["components"]["byIds"][id]
        })
    );

    const { state } = useMappedState(mapState);
    
    const dispatch = useDispatch()

    return [state, dispatch]
}

export default useComponent