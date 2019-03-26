import React from 'react';
import Api from "../Api/Api";
import update from 'immutability-helper';
import AsyncComponent from "../BeLazy/AsyncComponent";
import EventHandler from "../Actions/EventHandler";
import {requestJson} from "../Actions/network";


export default class DynamicList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            list: []
        };
        this.api = new Api(this.props.url);
        this.setList = this.setList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.init = this.init.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPairByIds = this.getPairByIds.bind(this);
        this.eventHandler = new EventHandler();
    }
    componentDidMount(){
        this.init();
        //this.api.get(this.setList,{url:this.props.url});
    }
    updateItem(event){
        //this.eventHandler['test'](event);
        event.preventDefault();
        const target = event.target;
        let index = this.state.list.findIndex(item => item.attributes.id === target.id);
        this.setState({
            list: update(this.state.list,{
                [index]:{attributes:{value:{$set:target.value}}}
            })
        });
    }
    init(){
        const config = {
            method: "GET"
        };
        if (this.props.data){
            this.setList(null);
        }else{
            requestJson({
                config,
                url:this.props.url,
                callback:this.setList
            });
        }
    }
    setList(json){
        let data= null;
        if (json){
            data = json;
        }else{
            data = this.props.data;
        }
        if(data[this.props.className]){
            for (let index = 0; index < data[this.props.className].length; index++) {
                this.addItem(data[this.props.className][index])
            }
        }
    }
    addItem(props) {
        const exists = this.state.list.findIndex(wdg => wdg.attributes.id === props.id);
        if (exists === -1){
            let item = {attributes:{}};
            item.attributes = props;
            item.import = AsyncComponent({
                componentName:props.componentName
            });
            this.setState(prevState => ({
                list: [...prevState.list, item]
            }));
        }

    }
    getPairByIds(props){
        let result = {};
        for (let i = 0; i < props.ids.length; i++) {
            for (let j = 0; j < this.state.list.length; j++){
                if (props.ids[i]===this.state.list[j].attributes.id){
                    const compAtt = {...this.state.list[j].attributes};
                    result[compAtt[props.pair]]=compAtt.value;
                    break;
                }
            } 
        }
        return result
    }
    handleSubmit(event){
        event.preventDefault();
        const json = this.getPairByIds({ids:["userName","userPassword"],pair:"name"});
        this.eventHandler['login']({json});
    }

    render() {
        let props = {
            handleChange:this.updateItem,
            handleSubmit:this.handleSubmit,
            filter:this.props.filter,
            className:this.props.className,
            url:this.props.url
        };
        return (
            <>
                {this.state.list.filter(comp => comp.attributes.contentFilter === props.filter).map((comp, index) =>
                    <comp.import
                        key={comp.attributes.id}
                        attributes={comp.attributes}
                        {...props}
                    >
                    </comp.import>
                )}
            </>
        );
    }
}