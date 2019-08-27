import { headerJsonApi, requestJson } from "./network";
import { constants } from "./Constants";

const jwtToken = "loginToken"

export const getLoginToken = () => {
    return localStorage.getItem(jwtToken);
};

export const setLoginToken = (token) => {
    localStorage.setItem(jwtToken, token);
};

export const removeLoginToken = () => {
    localStorage.removeItem(jwtToken);
};

export const isLoggedIn = () => {
    return !!(getLoginToken());
};

export const login = (props) => {
    const config = {
        method: "POST",
        headers: headerJsonApi({ type: 'login' }),
        body: JSON.stringify(props.json),
    };
    requestJson({
        config,
        url: constants.login,
        callback: setLoginToken
    });
};



