import {PureComponent} from "react";
import {constants} from "../Constants";
import {headerJsonApi, requestJson} from "./network";
import {login} from "./auth";

class EventHandler extends PureComponent {
    constructor(props){
        super(props);
        this.login = login.bind(this);
        this.post = this.post.bind(this);
    }

    post({json,callback}){
        const config = {
            method: "POST",
            headers: headerJsonApi,
            body: JSON.stringify(json),
        };
        requestJson({
            config,
            url:constants.login,
            callback:callback
        });
    }
}

export default EventHandler;