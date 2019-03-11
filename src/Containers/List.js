import React from 'react';
import Api from "../Api/Api";
import update from 'immutability-helper';
import AsyncComponent from "../BeLazy/AsyncComponent";


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list:[]
        };
        this.api = new Api(this.props.url);
        this.initList = this.initList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.getList = this.getList.bind(this);
    }
    getList(){
        return this.state.list;
    }
    componentDidMount(){
        this.api.get(this.initList,{url:this.props.url});
    }
    updateItem(event){
        event.preventDefault();
        const target = event.target;
        let index = this.getList().findIndex(item => item.attributes.id === target.id);
        this.setState({
            list: update(this.state.list,{
                [index]:{attributes:{value:{$set:target.value}}}
            })
        });
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
            item.import = AsyncComponent({
                componentName:props.dscomponent
            });
            this.setState(prevState => ({
                list: [...prevState.list, item]
            }));
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
                    <comp.import
                        key={comp.attributes.id}
                        attributes={comp.attributes}
                        {...props}/>
                )}
            </>
        );
    }
}