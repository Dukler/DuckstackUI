import React from "react";
import Api from "../Api/Api";
import {BrowserRouter } from "react-router-dom";
import {constants} from '../Constants';
import SignIn from "../Testing/SingIn";
import ResponsiveDrawer from "../Components/ResponsiveDrawer";
import List from "../Containers/List";

const contentList = <List url = {constants.home} className="Content"/>;
const linkList = <List url = {constants.home} className ="LinkList"/>;

export default class UI extends  React.Component{
    constructor(props) {
        super(props);
        this.state ={
            api: new Api({url:"ui/update"}),
            loggedIn:true
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
            return  <div>
                        <SignIn/>
                    </div>
        }else {
            return  <div>
                        <ResponsiveDrawer
                            contentList={contentList}
                            linkList={linkList}
                        />
                    </div>
        }
    }
    render(){
        return(
            <div className='UI'>
                <BrowserRouter>
                    {this.renderUI()}
                </BrowserRouter>
            </div>
    )}


}