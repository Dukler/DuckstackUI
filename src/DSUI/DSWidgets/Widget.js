import React from 'react';
import WidgetRender from "./WidgetRender";


export default class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    setValue = (val) => {
        this.props.attributes.value = val;
    };
    componentDidMount() {
        console.log("mounted widget " + this.props.attributes.name);
        //this.attributes = this.props.attributes;
    }
    componentDidUpdate(prevProps){
        console.log("updated widget " + this.props.attributes.name );
        if (this.props.attributes.value !== prevProps.attributes.value) {
            console.log("test")
        }
    }
    handleInputChange(event){
        this.props.onValueChange(event.target);
    }
    render(){
        return (
            <WidgetRender widget = {this}/>
        );
    }
}