import React from 'react';
import Button from '@material-ui/core/Button';
import EventHandler from "../Actions/EventHandler";
import useFilteredList from '../Hooks/useFilteredList';

const SubmitButton = props => {
    
    const eventHandler = new EventHandler();

    const list = useFilteredList({className:"components",filter:["tes2","tes3"]})

    const getPairByIds = (props) => {
        let result = {};
        for (let i = 0; i < props.ids.length; i++) {
            for (let j = 0; j < list.length; j++) {
                if (props.ids[i] === list[j].id) {
                    const compAtt = { ...list[j] };
                    result[compAtt[props.pair]] = compAtt.value;
                    break;
                }
            }
        }
        return result
    };

    const handleClick = (props) => {
        props.event.persist();
        const json = { [list["tes2"].name]: [list["tes2"].value], [list["tes3"].name]: [list["tes3"].value]}
        //const json = getPairByIds({ ids: props.ids, pair: props.pair });
        eventHandler[props.action]({ json });
    };

    const {actions} = props;

    return (
        <Button onClick={(e) => handleClick({
                event: e, ids: ['userName', 'userPassword'], 
                pair: 'name', action: actions.onClick})}
                variant="contained"
                color="primary">
            {props.caption}
        </Button>
    )
};
export default SubmitButton;
