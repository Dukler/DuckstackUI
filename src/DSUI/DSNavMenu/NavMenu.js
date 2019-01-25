import React from 'react';
import Menu from "./Menu";
import List from "../DSList/List";



export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.updateList = this.updateList.bind(this);
        this.getList = this.getList.bind(this);
    }
    componentDidMount() {
        console.log("navmenu");
    }

    getList(){
        return this.state.list;
    }
    updateList(List){
        this.setState({list:List});
    }

    render() {
        let container = {
            list: this.state.list,
            set: this.updateList
        };
        return (
            <List url = {this.props.url}
                  container = {container}
                  item = {new Menu({attributes:{}})}
                  className ="NavMenu"
            />
        );
    }
}