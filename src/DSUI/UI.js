import React from "react";
import Api from "../Api/Api";
import {HashRouter, Route} from "react-router-dom";
import Login from "./DSScreens/Login";
import WidgetListRender from "./DSWidgets/WidgetListRender";
import NavMenu from "./DSElements/NavMenu";

export default class UI extends  React.Component{
    constructor(props) {
        super(props);
        this.state ={
            api: new Api({url:"ui/update"}),
            navList: []
        };
    }
    componentDidMount() {
        console.log("mounted ui");
    }
    testing(){
        return <Route exact path="/" component={Login}/> +
            <WidgetListRender
                list ={this.state.widgetList}
                api={this.state.api}
                addWidget={this.addWidget}/>
    }
    render(){
        return(
            <div className='UI'>
                <HashRouter>
                    <div>
                        <NavMenu/>
                        <div className="content">
                            <Route exact path="/" component={Login}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
    )}


}