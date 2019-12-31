import { useDispatch } from 'redux-react-hook';
import useClassState from './useClassState';



function useStandalone(id) {

    const state = useClassState({ id, element: "standalones" })

    const dispatch = useDispatch()

    return [state, dispatch]
}

export default useStandalone