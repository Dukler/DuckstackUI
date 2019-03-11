import React from "react";
import {asyncComponent} from "react-async-component";

const MaterialIcon = ({ icon }) => {
    //let iconName = icon.replace(/Icon$/, '');
    return React.createElement(asyncComponent({
        resolve: () => import(
            /* webpackMode: "eager" */
            `@material-ui/icons/${icon}`)
    }))
};

export default MaterialIcon;