import React from 'react';
import Widget from "./Widget";
import List from "../DSList/List";


export default class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateList = this.updateList.bind(this);
    }
    updateList(List){
        this.setState({list:List});
    }
    componentDidMount(){
        console.log("widglist");
    }
    render() {
        return (
            <List url = {this.props.url}
                  container = {this.props.container}
                  item = {new Widget({attributes:{}})}
                  className ="Widgets"
                  filter = {this.props.filter}
            />
        );
    }
}