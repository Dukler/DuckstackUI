import React from 'react';
import Widget from "../DSWidgets/Widget";
import Menu from "../DSNavMenu/Menu";
import Content from "../DSContent/Content";
import Api from "../../Api/Api";


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.api = new Api(this.props.url);
        this.list = [];
        this.initList = this.initList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.updateList = this.updateList.bind(this);
        this.getList = this.getList.bind(this);
    }
    getList(){
        return this.list;
    }
    componentDidMount(){
        this.api.get(this.initList,{url:this.props.url});
    }
    updateList(List){
        this.list = List;
        this.props.updateList(this);
    }
    refreshList(target){
        let index = this.getList().findIndex(wdg => wdg.props.attributes.id === target.id);
        let items = [...this.getList()];
        let item = {...items[index]};
        item.setValue(target.value);
        this.updateList(items)
    }
    
    initList(data){
        if(data[this.props.className]){
            for (let index = 0; index < data[this.props.className].length; index++) {
                this.addItem(data[this.props.className][index])
            }
        }
    }
    addItem(props) {
        //let item = Object.create(this.props.item);
        let item = this.props.item;
        item.props.attributes = props;
        let list = [...this.getList()];
        list.push(item);
        this.updateList(list)
    }
    handleSubmit(event){
        event.preventDefault();
        this.api.post(this.state.list);
    }
    render() {
        let render = '';
        switch (this.props.className){
            case "Widgets":
                const filteredList = this.getList().filter(wdg => wdg.props.attributes.contentFilter === this.props.filter);
                render =
                    <div className={this.props.className}>
                        {filteredList.map((wdg, index) =>
                            <Widget
                                key = {index}
                                attributes = {wdg.props.attributes}
                                onValueChange = {this.refreshList}
                                handleSubmit = {this.handleSubmit}
                            />)}
                    </div>;
                break;
            case "NavMenu":
                render =
                    <ul className="header">
                        {this.getList().map((menu, index) =>
                            <Menu
                                key = {index}
                                attributes = {menu.props.attributes}
                            />)}
                    </ul>;
                break;
            case "Content":
                render =
                    <div className="content">
                        {this.getList().map((content, index) =>
                            <Content
                                key = {index}
                                attributes = {content.props.attributes}
                                url = {this.props.url}
                            />)}
                    </div>;
                break;
            default:
                break;
        }
        return (render);
    }
}