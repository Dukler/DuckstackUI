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
                if (props.ids[i]===list[j].attributes.id){
                    const compAtt = {...list[j].attributes};
                    result[compAtt[props.pair]]=compAtt.value;
                    break;
                }
            } 
        }
        return result
    };
    const handleSubmit = (props) =>{
        props.event.preventDefault();
        const json = getPairByIds({ids:props.ids,pair:props.pair});
        eventHandler['login']({json});
    };

    
    let shit = {
        handleSubmit:handleSubmit,
        filter:props.filter,
        className:props.className,
        url:props.url
    };
    return (
        <>
            {list.filter(comp => comp.attributes.contentFilter === props.filter).map((comp, index) =>
                <comp.import
                    key={comp.attributes.id}
                    attributes={comp.attributes}
                    handleChange={(e)=>dispatch({type:'eventItemValue',event:e})}
                    handleSubmit={(e)=>handleSubmit({event:e,ids:['userName','userPassword'],pair:'name',action:'login'})}
                    {...shit}
                >
                </comp.import>
            )}
        </>
    );
});

export default DynamicList