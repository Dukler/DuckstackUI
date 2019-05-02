import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'redux-react-hook';

const SubmitButton = props => {
    const filter = ["tes2", "tes3"]
    const dispatch = useDispatch()

    const post = (json) =>{
        console.log(json);
    }
    const prepareJSON = ({state,filter})=>{
        const list = {...state["byIds"]}
        let result = {}
        const filtered = Object.keys(list)
            .filter(key => filter.includes(key))
            .reduce((obj, key) => {
                obj[key] = list[key];
                return obj;
            }, {});
        Object.values(filtered).forEach((item) => {
            result[item.id] = item.value
        })
        return result
    }

    const handleClick = useCallback (
        (props) => 
            (event) =>{
                event.persist();
                
                dispatch({ type: "SUBMIT_JSON", payload: { filter, post, prepareJSON}})
                //const json = getPairByIds({ ids: props.ids, pair: props.pair });
                //eventHandler[props.action]({ json });
            },
            [dispatch,filter]
    );

    const {actions} = props;

    return (
        <Button onClick={handleClick({
                ids: ['userName', 'userPassword'], 
                action: actions.onClick})}
                variant="contained"
                color="primary">
            {props.caption}
        </Button>
    )
};
export default SubmitButton;
