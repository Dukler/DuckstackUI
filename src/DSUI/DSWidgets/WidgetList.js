import React from 'react';
import Widget from "./Widget";
import List from "../DSList/List";


export default class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:null
        };
        this.updateList = this.updateList.bind(this);
    }
    updateList(List){
        this.setState({list:List});
    }
    componentDidMount(){
    }
    render() {
        return (
            <List url = {this.props.url}
                  updateList = {this.updateList}
                  item = {new Widget({attributes:{}})}
                  className ="Widgets"
                  filter = {this.props.filter}
            />
        );
    }
}