import React from 'react';
import ListedLink from "../Components/ListedLink";
import ListManager from "../Components/ListManager";
import List from '@material-ui/core/List';
import Divider from "@material-ui/core/Divider";
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
            <div>
                <div className={this.props.toolbar} />
                <Divider />
                <List>
                    <ListManager url = {this.props.url}
                                 updateList = {this.updateList}
                                 item = {new ListedLink({attributes:{}})}
                                 className ="LinkList"
                                 {...this.state}
                    />
                </List>
                <Divider />
            </div>
        );
    }
}