import useElement from './useElement';

function useClassState({ id, element}) {
    const state = useElement(element);
    
    return state[id]
}

export default useClassState