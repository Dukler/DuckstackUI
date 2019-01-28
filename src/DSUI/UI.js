import React from "react";
import {HashRouter } from "react-router-dom";
import * as constants from '../Api/Constants';
import User from "./DSDataManager/User";
import {Login} from "./DSScreens/Login";


export default class UI extends  React.Component{
    user = User.getInstance();
    constructor(props) {
        super(props);
        this.renderUI= this.renderUI.bind(this);

    }
    componentDidMount() {
    }
    renderUI(){
        if(this.user.isLoggedIn()){
            //return <Screen props={{url:constants.home}}/>
        }else {
            return <Login/>
        }
    }
    render(){
        return(
            <div className='UI'>
                <HashRouter>
                    <div>
                        <h1>DSUI</h1>
                        <Login/>
                    </div>
                </HashRouter>
            </div>
    )}


}