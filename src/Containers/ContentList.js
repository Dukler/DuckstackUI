import React from 'react';
import List from "../Components/List";
import Content from "../Components/Content";


export default class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
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
                  {...this.state}
            />
        );
    }
}