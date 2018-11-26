import React from "react";
import Api from "../Api/Api";
import {HashRouter, Route} from "react-router-dom";
import Login from "./DSScreens/Login";
import NavMenu from "./DSNavMenu/NavMenu";
import * as constants from '../Api/Constants';
import ContentList from "./DSContent/ContentList";

export default class UI extends  React.Component{
    constructor(props) {
        super(props);
        this.state ={
            api: new Api({url:"ui/update"}),
            loggedIn:false
        };
        this.isLoggedIn= this.isLoggedIn.bind(this);
        this.renderUI= this.renderUI.bind(this);
    }
    componentDidMount() {
    }
    testing(){
        return <Route exact path="/" component={Login}/> +
            <div>
                <NavMenu url = {constants.login}/>

                    <Route exact path="/" component={Login}/>
                </div>


    }
    isLoggedIn(){
        return this.state.loggedIn;
    }
    renderUI(){
        if(this.isLoggedIn()){

        }else {
            return  <div>
                        <NavMenu url = {constants.main}/>
                        <ContentList url = {constants.main}/>
                    </div>
        }
    }
    render(){
        return(
            <div className='UI'>
                <HashRouter>
                    <div>
                        <h1>DSUI</h1>
                        {this.renderUI()}
                    </div>
                </HashRouter>
            </div>
    )}


}