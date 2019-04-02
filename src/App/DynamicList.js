import React from 'react';
import useDynamicList from "../Hooks/useDynamicList";
import EventHandler from "../Actions/EventHandler";


const DynamicList = React.memo(function DynamicList (props) {
    const [list, dispatch ] = useDynamicList(props);
    const eventHandler = new EventHandler();

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
    };

    const handleChange = (props) =>{
        props.event.persist();
        dispatch({type:props.type,event:props.event});
    };
    
    return (
        <>
            {list.filter(comp => comp.contentFilter === props.filter).map((comp, index) => {
                const { asyncImport, actions, ...cleanComp } = comp;
                const AsyncI = asyncImport;
                return (
                    <AsyncI
                        key={comp.id}
                        {...cleanComp}
                        handleChange={(e)=>handleChange({type:'eventItemValue',event:e})}
                        handleSubmit={(e)=>handleSubmit({event:e,ids:['userName','userPassword'],pair:'name',action:actions.onClick})}
                    >
                    </AsyncI>)
                }
            )}
        </>
    );
});

export default DynamicList