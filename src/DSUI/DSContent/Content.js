import React from 'react';
import {Route} from "react-router-dom";
import WidgetList from "../DSWidgets/WidgetList";


export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    renderTest(){
        //<Route id = {attributes.id} exact path={attributes.path} component={component}/>
    }
    render() {
        const attributes = this.props.attributes;
        return (
            <Route id = {attributes.id} exact path={attributes.path} render={()=>
                <>
                    <h2>{attributes.caption}</h2>
                    <WidgetList url = {this.props.url} filter={attributes.id}/>
                </>
            }/>
        );
    }
}