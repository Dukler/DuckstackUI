import React from 'react';
import {NavLink} from "react-router-dom";


export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <h1>DSUI</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Iniciar sesión</NavLink></li>
                </ul>
            </React.Fragment>
        );
    }
}