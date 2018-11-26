import React from 'react';
import WidgetList from "../DSWidgets/WidgetList";
import * as constants from '../../Api/Constants';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
    }

    render() {
        return (
            <form autoComplete="on">
                <h2>Conectarse</h2>
                <WidgetList url = {constants.login}/>
            </form>
        );
    }
}