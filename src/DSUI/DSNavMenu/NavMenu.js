import React from 'react';
import Menu from "./Menu";
import List from "../DSList/List";



export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
        this.updateList = this.updateList.bind(this);
        this.getList = this.getList.bind(this);
    }

    getList(){
        return this.state.list;
    }
    updateList(List){
        this.setState({list:List});
    }

    render() {
        return (
            <List url = {this.props.url}
                  updateList = {this.updateList}
                  item = {new Menu({attributes:{}})}
                  className ="NavMenu"
            />
        );
    }
}