import React from "react";
import Api from "../Api/Api";
import {HashRouter } from "react-router-dom";
import LinkList from "../Containers/LinkList";
import {constants} from '../Constants';
import ContentList from "../Containers/ContentList";
import SignIn from "../Testing/SingIn";
import ResponsiveDrawer from "../Testing/ResponsiveDrawer";

export default class UI extends  React.Component{
    constructor(props) {
        super(props);
        this.state ={
            api: new Api({url:"ui/update"}),
            loggedIn:false
        };
        this.isLoggedIn= this.isLoggedIn.bind(this);
        this.renderUI= this.renderUI.bind(this);
        this.testLogin= this.testLogin.bind(this);
    }
    componentDidMount() {
    }
    isLoggedIn(){
        return this.state.loggedIn;
    }
    testLogin(){
        this.setState({loggedIn:true});
    }
    renderUI(){
        if(!this.isLoggedIn()){
            return <div>
                <ResponsiveDrawer/>
            </div>
        }else {
            return  <div>
                        <LinkList url = {constants.home}/>
                        <ContentList url = {constants.home}/>
                    </div>
        }
    }
    render(){
        return(
            <div className='UI'>
                <HashRouter>
                    {this.renderUI()}
                </HashRouter>
            </div>
    )}


}