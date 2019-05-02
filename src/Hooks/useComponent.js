import { useDispatch} from 'redux-react-hook';
import useClassState from './useClassState';



function useComponent(id){

    const state = useClassState({ id, element:"components"})
    
    const dispatch = useDispatch()

    return [state, dispatch]
}

export default useComponent