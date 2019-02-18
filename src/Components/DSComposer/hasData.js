
import * as React from "react";
import Widget from "../DSWidgets/Widget";
import Menu from "../DSNavMenu/Menu";
import update from 'immutability-helper';
import Content from "../DSContent/Content";


export const hasData = ({url, params, loadingMessage}) => WrappedComponent => {
    class HasData extends React.Component {
        mounted = false;
        widgetsData=[];
        state = {
            navMenuData:[],
            widgetsData:[],
            contentData:[],
            hasError: false,
            error: {
                title: 'Cannot retrieve Real Posts',
                message: 'Could not retrieve Real Posts from supplied API.'
            },
            useDefault: false,
            loading: false,
            loadingMessage
        };
        get(url, { params }){
            fetch("http://192.168.0.5:8080/api/" + url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                })
                .then(data => {
                    if (this.mounted) {
                        this.initList(data);
                        this.setState({
                            //data:data,
                            loading: false,
                            hasError: false
                            //useDefault: data.length === 0
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        hasError: true,
                        loading: false
                    })
                })
        }

        componentDidMount() {
            this.mounted = true;
            this.setState({loading: true});
            this.get(url, {});
        }

        componentWillUnmount() {
            this.mounted = false;
        }


        initList(data){
            let content=[],widgets=[],navMenu=[];
            data["Content"].forEach(cont=>{content.push(new Content(cont))});
            data["Widgets"].forEach(wdg=>{widgets.push(new Widget(wdg))});
            data["NavMenu"].forEach(menu=>{navMenu.push(new Menu(menu))});
            //let list={Content:content,Widgets:widgets,NavMenu:navMenu};
            //this.setState({data:list});
            //this.widgetsData=widgets;
            this.setState({widgetsData:widgets});
            this.setState({navMenuData:navMenu});
            this.setState({contentData:content});
            console.log();
        }
        getData(className){
            switch (className) {
                case "Widgets":
                    return this.state.widgetsData;
                case "NavMenu":
                    return this.state.navMenuData;
                case "Content":
                    return this.state.contentData;
                default:
                    return [];
            }

        }
        setUpdateStatus(item,status){
            const className="Widgets";
            const id = item.props.id;
            const index = this.getData(className).findIndex(wdg => wdg.props.id === id);
            if (index>=0){
                this.widgetsData[index].isUpdated = status;
            }

        }
        replace(event){
            const className="Widgets";
            const index = this.getData(className).findIndex(wdg => wdg.props.id === event.target.id);
            const newData = update(this.state.widgetsData,
                {[index]:{props:{value:{$set:event.target.value}}}}
            );
            this.setState({widgetsData: newData});
        }

        updateState(event){
            const className="Widgets";
            const index = this.getData(className).findIndex(wdg => wdg.props.id === event.target.id);
            const newData = update(this.widgetsData[index],
                {props:{value:{$set:event.target.value}}}
            );
            // this.setState({widgetsData: newData});
            this.widgetsData[index] = newData;
            //this.widgetsData[index].isUpdated=true;
        }

        render() {
            return (
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    actions = {{
                        replace:this.replace.bind(this),
                        getData:this.getData.bind(this),
                        setUpdateStatus:this.setUpdateStatus.bind(this)
                    }}
                />
            )
        }
    }

    return HasData
};