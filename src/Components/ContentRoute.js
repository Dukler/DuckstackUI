import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import DynamicList from "../App/DynamicList";
import {DataContext} from "../App/UI";

const ContentRoute = React.memo(function ContentRoute (props) {
    //let iconName = icon.replace(/Icon$/, '');
    const attributes = props.attributes;
    const data = useContext(DataContext);
    return <Route id = {attributes.id} exact path={attributes.path} render={()=>
        <>
            <DynamicList data={data}
                         className="Components"
                         filter={attributes.id}
            />
        </>
    }/>
});

export default ContentRoute;