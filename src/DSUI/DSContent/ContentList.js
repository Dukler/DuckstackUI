import React from 'react';
import {compose} from "redux";
import {hasProps, isList} from "../DSComposer/Composer";
import {hasData} from "../DSComposer/hasData";
import {Content} from "./Content";


export const ContentList = props => {
    let CL = compose(
        hasProps({
            className:"Content",
            item:new Content({attributes:{}})
        }),
        hasData({
            url: "ui/update/Login",
            params: {
                _limit: 10,
                page: 2
            },
            loadingMessage: 'Loading posts from JSON Placeholder...'
        }),
        isList({type:"content",tag:'div'})
    )(Content);
    return(<CL/>);
};