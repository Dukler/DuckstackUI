import React from 'react';
import List from "../DSList/List";
import Content from "./Content";


export default class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.setContainer = this.setContainer.bind(this);
    }
    componentDidMount() {

    }
    setContainer(List){
        this.setState({list:List});
    }
    getSerializedList(){
        let attList=[this.getList().length];
        for(let i=0;i< this.getList().length;i++){
            attList[i]=this.getList()[i].attributes
        }
        return attList;
    }
    render() {
        let container = {
            list: this.state.list,
            set: this.setContainer,
            handleSubmit:this.props.handleSubmit
        };
        return (
            <List url = {this.props.url}
                  container = {container}
                  item = {new Content({attributes:{}})}
                  className ="Content"
            />
        );
    }
}