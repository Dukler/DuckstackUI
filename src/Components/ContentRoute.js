import React from 'react';
import {Route} from "react-router-dom";
import DynamicList from './../BeLazy/DynamicList';

const ContentRoute = React.memo(function ContentRoute (props) {
    // const [DynamicList, setDL] = useState();
    // const [loading, setLoading] = useState(true);

    // (() => {
    //     import(/* webpackChunkName: "lodash" */ './../BeLazy/DynamicList')
    //     .then(DL=>{
    //         setDL(DL.default);
    //         setLoading(false);
    //     })
    //     console.log("1");
    // })();

    console.log();
    return (
        <Route id = {props.id} exact path={props.path} render={()=>
            <DynamicList
                element="components"
                components={props.components}/>
        }/>
    )
});

export default ContentRoute;