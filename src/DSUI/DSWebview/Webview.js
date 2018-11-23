import React from 'react';
import WidgetList from "../DSWidgets/WidgetList";
import Api from "../../Api/Api";


export default class Webview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: new Api({url:"ui/update"}),
            widgetList: [],
        };
    }

    getList(){
        return this.state.widgetList;
    }

    render() {
        return (
            <div>
                <WidgetList ui = {this}/>
            </div>
        );
    }
}