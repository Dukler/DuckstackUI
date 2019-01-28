import React from 'react';
import {NavLink} from "react-router-dom";


export default class Menu extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return (
            <li>
                <NavLink id = {this.props.id}
                         exact to={this.props.path}>
                    {this.props.caption}
                </NavLink>
            </li>
        );
    }

};