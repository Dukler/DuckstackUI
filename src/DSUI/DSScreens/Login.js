import React from 'react';
import User from "../DSDataManager/User";
import {Screen} from "./Screen";
import * as constants from "../../Api/Constants";
import {hasProps} from "../DSComposer/Composer";


export const Login = ({props}) => {
    let user = User.getInstance();

    function login(props) {
        const id = props.find(wdg=> wdg.id ==="userName").getValue();
        user.login(id)
    }
    return (
    hasProps({url:constants.login,handleSubmit:login})(Screen)()
    );
};
