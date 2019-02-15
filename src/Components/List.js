import React from 'react';
import Api from "../Api/Api";
import {RenderList} from "../Render/RenderList";


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.api = new Api(this.props.url);
        this.initList = this.initList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.updateList = this.updateList.bind(this);
        this.getList = this.getList.bind(this);
    }
    getList(){
        return this.props.list;
    }
    componentDidMount(){
        this.api.get(this.initList,{url:this.props.url});
    }
    updateList(List){
        //this.setState(List);
        this.props.updateList(List);
    }
    refreshList(target,item){
        let index = this.getList().findIndex(wdg => wdg.attributes.id === target.id);
        let items = [...this.getList()];
        items[index] = item;
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
        const exists = this.getList().findIndex(wdg => wdg.attributes.id === props.id);
        if (exists === -1){
            let item = this.props.item;
            item.attributes = props;
            let list = [...this.getList()];
            list = list.concat([item]);
            this.updateList(list)
        }

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