import React from 'react';
import Api from "../../Api/Api";
import {RenderList} from "./RenderList";


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
    refreshList(target,item,itemName){
        let index = this.getList().findIndex(wdg => wdg.attributes.id === target.id);
        let items = [...this.getList()];
        //let item = {...items[index]};
        //let x = Object.assign({},item,{attributes:attributes});
        if(itemName === "widget"){
            items[index] = item;
        }
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
        item.attributes = props;
        let list = [...this.getList()];
        list = list.concat([item]);
        this.updateList(list)
    }
    handleSubmit(event){
        event.preventDefault();
        this.api.post(this.getList());
    }

    render() {
        let props = {
            refreshList:this.refreshList,
            handleSubmit:this.handleSubmit,
            filter:this.props.filter,
            className:this.props.className,
            url:this.props.url};

        return (<RenderList
            list = {this.getList()}
            opts = {props}/>);
    }
}