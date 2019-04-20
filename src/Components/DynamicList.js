import React, {useCallback} from 'react';
import EventHandler from "../Actions/EventHandler";
import PropTypes from "prop-types";
import useDynamicList from '../Hooks/useDynamicList';
import { useDispatch } from 'redux-react-hook/dist/index';


const DynamicList = React.memo(function DynamicList (props) {
    
    const [list] = useDynamicList(props);
    
    const eventHandler = new EventHandler();

    const dispatch = useDispatch();

    const getPairByIds = (props) =>{
        let result = {};
        for (let i = 0; i < props.ids.length; i++) {
            for (let j = 0; j < list.length; j++){
                if (props.ids[i]===list[j].id){
                    const compAtt = {...list[j]};
                    result[compAtt[props.pair]]=compAtt.value;
                    break;
                }
            } 
        }
        return result
    };
    const handleChange = (action) => useCallback(
        (event) => {
            event.persist();
            dispatch({ ...action,event});
        },
        [action],
    );

    const handleClick = (props)  =>{
        props.event.persist();
        const json = getPairByIds({ids:props.ids,pair:props.pair});
        eventHandler[props.action]({json});
    };

    
    return (
        <>
            {list.map(comp => {
                const { AsyncImport, actions, ...cleanComp } = comp;
                return (
                    <AsyncImport
                        key={comp.id}
                        {...cleanComp}
                        handleChange={handleChange({type:"inputValue"})}
                        handleClick={(e) => handleClick({
                            event:e,ids:['userName','userPassword'],pair:'name',action:actions.onClick})}
                    />
                    )
                }
            )}
        </>
    );
});

DynamicList.propTypes = {
    className: PropTypes.string.isRequired
};

export default DynamicList