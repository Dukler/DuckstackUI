import React from 'react';
import Widget from "./Widget";
import Api from "../../Api/Api";
import WidgetListRender from "./WidgetListRender";


export default class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: new Api({url:this.props.url}),
            list: []
        };
        this.initWdgList = this.initWdgList.bind(this);
        this.addWidget = this.addWidget.bind(this);
        this.refreshWidgets = this.refreshWidgets.bind(this);
        this.updateList = this.updateList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getList = this.getList.bind(this);
    }
    getList(){
        return this.state.list;
    }
    handleSubmit(event){
        event.preventDefault();
        this.state.api.post(this.state.list);
    }
    updateList(List){
        this.setState({list:List});
    }
    componentDidMount(){
        console.log("mounted widgetlist");
        this.state.api.get(this.initWdgList);
    }
    initWdgList(data){
        for (let index = 0; index < data.widgets.length; index++) {
            this.addWidget(data.widgets[index])
        }
    }
    addWidget(props) {
        let list = [...this.getList()];
        list.push(new Widget({attributes:props}));
        this.updateList(list)
    }

    refreshWidgets(target){
        let index = this.getList().findIndex(wdg => wdg.props.attributes.id === target.id);
        let items = [...this.getList()];
        let item = {...items[index]};
        item.setValue(target.value);
        this.updateList(items)
    }
    render() {
        return (
            <WidgetListRender
                widgetList ={this}/>
        );
    }
}