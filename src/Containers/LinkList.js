import React from 'react';
import ListManager from "../Helpers/ListManager";
import List from '@material-ui/core/List';

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
            <List>
                <ListManager url = {this.props.url}
                             updateList = {this.updateList}

                             className ="LinkList"
                             {...this.state}
                />
            </List>
        );
    }
}