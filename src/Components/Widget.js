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
    onValueChange(event){
        event.preventDefault();
        const target = event.target;
        this.setState({value:target.value});
        this.props.actions.setUpdateStatus(this,false);

        //this.props.actions.replace(this);
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

    onSubmit(event){
        event.preventDefault();
        //api.post({url:"Login",list:props.getSerializedList()})
        //this.props.handleSubmit(this.props.getSerializedList());
    }

    render(){
        return (
            <WidgetRender
                attributes = {this.props}
                value = {this.props.value}
                actions = {{...this.props.actions,
                    handleInputChange:this.onValueChange,
                    handleSubmit:this.onSubmit}}
            />);
    }

};