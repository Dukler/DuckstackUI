import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
//import useFilteredList from '../Hooks/useFilteredList';
//import EventHandler from "../Actions/EventHandler";
import { useDispatch } from 'redux-react-hook';

//const eventHandler = new EventHandler();

const SubmitButton = props => {
    const dispatch = useDispatch();
    const filter = ["tes2", "tes3"]
    //const [list] = useFilteredList({ className: "components", filter })
    

    const prepareJson = (state) => {
        let result = {};
        const list = state["components"]["byIds"]
        const filtered = Object.keys(list)
            .filter(key => filter.includes(key))
            .reduce((obj, key) => {
                obj[key] = list[key];
                return obj;
            }, {});
        Object.values(filtered).forEach((item)=>{
            result[item.name]=item.value
        })

        return result
    };

    const handleClick = (props) => useCallback(
        (event) => {
            event.persist();
            const json = dispatch(prepareJson);
            console.log("test");
            //const json = getPairByIds({ ids: props.ids, pair: props.pair });
            //eventHandler[props.action]({ json });
        },
        [props],
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
