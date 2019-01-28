import React from 'react';
import {compose} from "recompose";
import {hasData} from "../DSComposer/hasData";
import Screen from "./Screen";




export const Login = () => {
    // let user = User.getInstance();
    //
    // function login(props) {
    //     const id = props.find(wdg=> wdg.id ==="userName").getValue();
    //     user.login(id)
    // }
    const Log=compose(
        hasData({
            url: "ui/update/Login",
            params: {
                _limit: 10,
                page: 2
            },
            loadingMessage: 'Loading posts from JSON Placeholder...'
        }),
    )(Screen);
    return (<Log/>);
};
