import React from 'react';
import Link from "../Components/Link";
import ListManager from "../Components/ListManager";
//const CustomTag =`${tag}`;
//<CustomTag><CustomTag/>


export default class LinkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
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

            <ListManager url = {this.props.url}
                         updateList = {this.updateList}
                         item = {new Link({attributes:{}})}
                         className ="LinkList"
                         {...this.state}
            />
        );
    }
}