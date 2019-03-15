import React from 'react';
import {Route} from "react-router-dom";
import List from "../Containers/List";

const ContentRoute = props =>  {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    return <Route id = {attributes.id} exact path={attributes.path} render={()=>
        <>
            <List url = {props.url}
                  className ="Components"
                  filter = {attributes.id}
            />
        </>
    }/>
};

export default ContentRoute;