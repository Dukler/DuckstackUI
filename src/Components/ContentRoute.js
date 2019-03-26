import React from 'react';
import {Route} from "react-router-dom";
import DynamicList from "../App/DynamicList";

const ContentRoute = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    return <Route id = {attributes.id} exact path={attributes.path} render={()=>
        <>
            <DynamicList url = {props.url}
                         className ="Components"
                         filter = {attributes.id}
            />
        </>
    }/>
};

export default ContentRoute;