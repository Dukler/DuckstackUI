import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';



function useElement( element ) {

    const mapState = useCallback(
        state => ({
            state: state[element]["byIds"]
        }),[element]
    );

    const { state } = useMappedState(mapState);

    return state
}

export default useElement