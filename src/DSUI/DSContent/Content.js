import React from 'react';
import {Route} from "react-router-dom";
import {compose} from "recompose";
import {hasProps, isList} from "../DSComposer/Composer";
import {hasData} from "../DSComposer/hasData";
import {Widget} from "../DSWidgets/Widget";


export const Content = props  => {
    const attributes = props.attributes;
    let Widgets = compose(
        hasProps({
            filter:attributes.id,
            className:"Widgets",
            item:new Widget({attributes:{}})
        }),
        hasData({
            url: "ui/update/Login",
            params: {
                _limit: 10,
                page: 2
            },
            loadingMessage: 'Loading posts from JSON Placeholder...'
        }),
        isList({type:"widget",tag:'div'})
    )(Widget);
    return (
            <Route id ={attributes.id} exact path={attributes.path} render={()=>
                <>
                    <h2>{attributes.caption}</h2>
                    <Widgets/>
                </>
            }/>
    );
};