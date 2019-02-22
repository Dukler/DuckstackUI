import React from 'react';
import {Route} from "react-router-dom";
import Widget from "./Widget";
import ListManager from "./ListManager";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
        this.stateCache = this.stateCache.bind(this);
    }
    componentDidMount() {
        console.log("montado c");
    }
    stateCache(List){
        this.setState({list:List});
    }
    render() {
        const attributes = this.props.attributes;
        return (
            <Route id = {attributes.id} exact path={attributes.path} render={()=>
                <>
                    <ListManager url = {this.props.url}
                                 updateList = {this.stateCache}
                                 item = {new Widget({attributes:{}})}
                                 className ="Widgets"
                                 filter = {attributes.id}
                                 list = {this.state.list}
                    />
                </>
            }/>
        );
    }
}