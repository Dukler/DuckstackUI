import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import DynamicList from "../App/DynamicList";
import {DataContext} from "../App/UI";

const ContentRoute = React.memo(function ContentRoute (props) {
    //let iconName = icon.replace(/Icon$/, '');
    const data = useContext(DataContext);
    return <Route id = {props.id} exact path={props.path} render={()=>
        <>
            <DynamicList data = {data}
                         className="Components"
                         filter={props.id}
            />
        </>
    }/>
});

export default ContentRoute;