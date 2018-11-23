import React from 'react';
import Api from "../../Api/Api";
import WidgetList from "../DSWidgets/WidgetList";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: new Api()
        };
    }
    componentDidMount(){
    }

    render() {
        return (
            <div>
                <h2>Conectarse</h2>
                <WidgetList url ="ui/update/Login"/>
            </div>
        );
    }
}