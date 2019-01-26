import React from 'react';
import {NavLink} from "react-router-dom";

export const Menu = props => {
    const attributes = props.attributes;
    return (
        <li><NavLink id = {attributes.id} exact to={attributes.path}>{attributes.caption}</NavLink></li>
    );
};