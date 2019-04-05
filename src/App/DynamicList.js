import React from 'react';
import useDynamicList from "../Hooks/useDynamicList";
import EventHandler from "../Actions/EventHandler";
import PropTypes from "prop-types";


const DynamicList = React.memo(function DynamicList (props) {
    const [list, dispatch ] = useDynamicList(props);
    const eventHandler = new EventHandler();
    const filter = (typeof props.filter === "undefined")?"":props.filter;

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
    
    const handleSubmit = (props) =>{
        props.event.persist();
        const json = getPairByIds({ids:props.ids,pair:props.pair});
        eventHandler[props.action]({json});
        //modal.dispatch("close");
    };

    const handleChange = (props) =>{
        props.event.persist();
        dispatch({type:props.type,event:props.event});
    };
    
    return (
        <>
            {list.filter(comp => comp.contentFilter === filter).map(comp => {
                const { AsyncImport, actions, ...cleanComp } = comp;
                return (
                    <AsyncImport
                        key={comp.id}
                        {...cleanComp}
                        handleChange={(e)=>handleChange({type:'eventItemValue',event:e})}
                        handleSubmit={(e)=>handleSubmit({event:e,ids:['userName','userPassword'],pair:'name',action:actions.onClick})}
                    >
                    </AsyncImport>)
                }
            )}
        </>
    );
});

DynamicList.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
};

export default DynamicList