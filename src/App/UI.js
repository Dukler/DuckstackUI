import React from "react";
import {BrowserRouter } from "react-router-dom";
import {constants} from '../Constants';
import ResponsiveDrawer from "../Components/ResponsiveDrawer";
import DynamicList from "./DynamicList";

const LcontentList = <DynamicList url = {constants.ui.login} className="Content"/>;
const LlinkList = <DynamicList url = {constants.ui.login} className ="LinkList"/>;


export default function UI (){
    return(
        <div className='UI'>
            <BrowserRouter>
                <div>
                    <ResponsiveDrawer
                        contentList={LcontentList}
                        linkList={LlinkList}
                    />
                </div>
            </BrowserRouter>
        </div>
    )
}