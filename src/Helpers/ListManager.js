import React from 'react';
import Api from "../Api/Api";
//import LazyComponent from "../BeLazy/LazyComponent";
import AsyncComponent from "../BeLazy/AsyncComponent";
import update from 'immutability-helper';


export default class ListManager extends React.Component {
    constructor(props) {
        super(props);
        this.api = new Api(this.props.url);
        this.initList = this.initList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
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
        //this.setState(ListManager);
        this.props.updateList(List);
    }
    updateItem(event){
        event.preventDefault();
        const target = event.target;
        let index = this.getList().findIndex(wdg => wdg.attributes.id === target.id);
        // let items = [...this.getList()];
        // items[index].attributes.value=target.value;
        const newList = update(this.getList(),{
            [index]:{attributes:{value:{$set:target.value}}}
        });

        this.updateList(newList)
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
            let item = {attributes:{}};
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
            updateItem:this.updateItem,
            handleSubmit:this.handleSubmit,
            filter:this.props.filter,
            className:this.props.className,
            url:this.props.url};

        return (
            <>
                {this.getList().filter(comp => comp.attributes.contentFilter === props.filter).map((comp, index) =>
                    <AsyncComponent
                        key={comp.attributes.id}
                        componentName={comp.attributes.dscomponent}
                        props={{attributes:comp.attributes, ...props}}/>
                )}
            </>
        );
    }
}