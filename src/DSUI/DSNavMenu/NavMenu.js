import React from 'react';

import {compose} from "recompose";
import {hasProps, isList} from "../DSComposer/Composer";
import {hasData} from "../DSComposer/hasData";
import {Menu} from "./Menu";



export const NavMenu = props => {
    let NM = compose(
        hasProps({
            className:"NavMenu",
            item:new Menu({attributes:{}})
        }),
        hasData({
            url: props.url,
            params: {
                _limit: 10,
                page: 2
            },
            loadingMessage: 'Loading posts from JSON Placeholder...'
        }),
        isList({type:"header",tag:'ul'})
    )(Menu);
    return(<NM/>);
};