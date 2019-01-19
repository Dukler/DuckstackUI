import React from 'react';
import List from "../DSList/List";
import Content from "./Content";


export default class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
        this.updateList = this.updateList.bind(this);
        this.getList = this.getList.bind(this);
    }
    componentDidMount() {

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
                  item = {new Content({attributes:{}})}
                  className ="Content"
            />
        );
    }
}