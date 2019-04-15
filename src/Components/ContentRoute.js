import React from 'react';
import {Route} from "react-router-dom";
import DynamicList from './DynamicList';

const ContentRoute = React.memo(function ContentRoute (props) {
    
    return <Route id = {props.id} exact path={props.path} render={()=>
        <>
            <DynamicList
                    className="components"
                    components={props.components}/>
        </>
    }/>
});

export default ContentRoute;