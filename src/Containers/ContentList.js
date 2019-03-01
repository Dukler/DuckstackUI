import React from 'react';
import ListManager from "../Helpers/ListManager";
import {Switch} from "react-router-dom";


export default class ContentList extends React.Component {
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
            <Switch>
                <ListManager url = {this.props.url}
                             updateList = {this.updateList}
                             className ="Content"
                             {...this.state}
                />
            </Switch>
        );
    }
}