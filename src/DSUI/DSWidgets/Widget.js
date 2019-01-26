import React from 'react';
import {WidgetRender} from "./WidgetRender";


export const Widget = props => {
    // constructor(props) {
    //     super(props);
    //     handleInputChange = handleInputChange.bind(this);
    //     handleSubmit = handleSubmit.bind(this);
    //     getValue = getValue.bind(this);
    //     attributes = {};
    //
    // }
    const attributes = props.attributes;
    function getValue(){
        return props.attributes.value;
    }
    function onValueChange(event){
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        let att =  {
            id: props.attributes.id,
            caption: props.attributes.caption,
            name: props.attributes.name,
            type: props.attributes.type,
            dstype: props.attributes.dstype,
            suggested: props.attributes.suggested,
            contentFilter: props.attributes.contentFilter,
            value: value
        };
        let wdg = new Widget({attributes:att});
        //let wdg = Object.assign(new Widget(),this,{attributes:att});
        props.replace(target,wdg,"widget");
    }
    function onSubmit(event){
        event.preventDefault();
        //api.post({url:"Login",list:props.getSerializedList()})
        props.handleSubmit(props.getSerializedList());
    }
    let actions = {
        handleInputChange:onValueChange,
        handleSubmit:onSubmit};

    return (<WidgetRender
        attributes = {attributes}
        actions = {actions}
    />);
};