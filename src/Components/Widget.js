import React from 'react';
import {WidgetRender} from "../Render/WidgetRender";


export default class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps){
        if (this.props.attributes.value !== prevProps.attributes.value) {
            console.log("updated widget " + this.props.attributes.name );
        }
    }
    handleInputChange(event){
        let att =  {
                id: this.props.attributes.id,
                caption: this.props.attributes.caption,
                name: this.props.attributes.name,
                type: this.props.attributes.type,
                dstype: this.props.attributes.dstype,
                suggested: this.props.attributes.suggested,
                contentFilter: this.props.attributes.contentFilter,
                value: event.target.value
        };
        let wdg = Object.assign(new Widget(),this,{attributes:att});
        this.props.onValueChange(event.target,wdg);
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