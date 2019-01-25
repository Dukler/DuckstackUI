import React from 'react';
import Api from "../../Api/Api";
import {RenderList} from "./RenderList";


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.api = new Api(this.props.url);
        this.initList = this.initList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.replace = this.replace.bind(this);
        this.getSerializedList = this.getSerializedList.bind(this);
        this.setList = this.setList.bind(this);
        this.getList = this.getList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getList(){
        return this.props.container.list;
    }
    componentDidMount(){
        this.api.get({callback:this.initList,url:this.props.url});
    }
    setList(List){
        //this.list = List;
        this.props.container.set(List);
    }
    replace(target,item){
        let index = this.getList().findIndex(wdg => wdg.attributes.id === target.id);
        let items = [...this.getList()];
        // if(itemName === "widget"){
        //     items[index] = item;
        // }
        items[index] = item;
        this.setList(items)
    }

    initList(data){
        if(data[this.props.className]){
            for (let index = 0; index < data[this.props.className].length; index++) {
                this.addItem(data[this.props.className][index])
            }
        }
    }
    addItem(props) {
        if (!this.getList().find(wdg => wdg.attributes.id === props.id) ){
            let item = this.props.item;
            item.attributes = props;
            let list = [...this.getList()];
            list = list.concat([item]);
            this.setList(list)
        }
    }
    getSerializedList(){
        let attList=[this.getList().length];
        for(let i=0;i< this.getList().length;i++){
            attList[i]=this.getList()[i].attributes
        }
        return attList;
    }
    handleSubmit(){
        this.props.container.handleSubmit(this.getSerializedList());
    }

    render() {
        let props = {
            getSerializedList:this.getSerializedList,
            filter:this.props.filter,
            className:this.props.className,
            url:this.props.url,
            replace:this.replace,
            handleSubmit:this.handleSubmit};

        return (<RenderList
            list = {this.getList()}
            props = {props}/>);
    }
}