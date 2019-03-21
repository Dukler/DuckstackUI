import React from 'react';
import Api from "../Api/Api";
import update from 'immutability-helper';
import AsyncComponent from "../BeLazy/AsyncComponent";


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            list: [],
            container:React.Fragment
        };
        this.api = new Api(this.props.url);
        this.setList = this.setList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.getList = this.getList.bind(this);
        this.init = this.init.bind(this);

    }
    getList(){
        return this.state.list;
    }
    componentDidMount(){
        this.init();
        //this.api.get(this.setList,{url:this.props.url});
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
    init(){
        const config = {
            method: "GET"
        };
        if (this.props.data){
            this.setList(null);
        }else{
            //this.api.get(this.setList,{url:this.props.url});
            this.api.request({
                config,
                url:this.props.url,
                callback:this.setList
            });
        }
    }
     async setList(response){
        let data= null;
        if (response){
            data = await response.json();
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
        const exists = this.getList().findIndex(wdg => wdg.attributes.id === props.id);
        if (exists === -1){
            let item = {attributes:{}};
            item.attributes = props;
            //item.attributes.components = null;
            item.import = AsyncComponent({
                componentName:props.componentName
            });
            this.setState(prevState => ({
                list: [...prevState.list, item]
            }));
        }

    }
    handleSubmit(event){
        event.preventDefault();
        const list = this.getList();
        const config = {
            method: "POST",
            headers: new Headers({
                "Accept": "application/xml"
            }),
            body: formData,
        };
        this.api.request({
            config,
            url:this.props.url,
            callback:this.setList
        });
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
                        {...props}>
                    </comp.import>
                )}
            </>
        );
    }
}