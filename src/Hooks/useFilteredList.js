import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';


function useFilteredList(props) {

    const mapState = useCallback(
        state => ({
            list: state[props.className]["byIds"]
        })
    );
    const {list} = useMappedState(mapState);
    const {filter} = props;

    const filtered = Object.keys(list)
        .filter(key => filter.includes(key))
        .reduce((obj, key) => {
            obj[key] = list[key];
            return obj;
        }, {});

    return [filtered]
}

export default useFilteredList