import React from 'react';
import {WidgetRender} from "./WidgetRender";


export default class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.state={value:""};
        this.isUpdated = true;
    }
    changeValue(val){
        this.setState(state =>({value:val}))
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
    static getDerivedStateFromProps(props, state){
        console.log("asd");
        if(props.value !== state.value){
            return{
                value:props.value
            }
        }
        return null;
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