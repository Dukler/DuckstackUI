import React from "react";
import Api from "../Api/Api";
import {HashRouter } from "react-router-dom";
import NavMenu from "./DSNavMenu/NavMenu";
import {constants} from '../Constants';
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
    isLoggedIn(){
        return this.state.loggedIn;
    }
    renderUI(){
        if(this.isLoggedIn()){

        }else {
            return  <div>
                        <NavMenu url = {constants.login}/>
                        <ContentList url = {constants.login}/>
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