import React from 'react';
import {WidgetRender} from "./WidgetRender";


export default class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.attributes = {};
    }
    componentDidMount() {
        this.attributes = this.props.attributes;
    }
    componentDidUpdate(prevProps){
        if (this.props.attributes.value !== prevProps.attributes.value) {
            console.log("updated widget " + this.props.attributes.name );
        }
    }
    handleInputChange(event){
        let att =  {
                id: this.attributes.id,
                caption: this.attributes.caption,
                name: this.attributes.name,
                type: this.attributes.type,
                dstype: this.attributes.dstype,
                suggested: this.attributes.suggested,
                contentFilter: this.attributes.contentFilter,
                value: event.target.value
        };
        let wdg = Object.assign(new Widget(),this,{attributes:att});
        this.props.onValueChange(event.target,wdg,"widget");
    }
    handleSubmit(event){
        this.props.handleSubmit(event)
    }
    render(){
        let props = {
            handleInputChange:this.handleInputChange,
            handleSubmit:this.handleSubmit};

        return (<WidgetRender
            attributes = {this.props.attributes}
            opts = {props}/>);
    }
}