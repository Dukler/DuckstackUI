import React from 'react';
import {NavLink} from "react-router-dom";


export default class Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        //this.attributes = this.props.attributes;
    }
    render(){
        const attributes = this.props.attributes;
        return (
            <li><NavLink id = {attributes.id} exact to={attributes.path}>{attributes.caption}</NavLink></li>
        );
    }
}