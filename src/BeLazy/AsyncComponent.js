import React from "react";
import {asyncComponent} from "react-async-component";

const AsyncComponent = ({componentName, props}) => {
    //let iconName = icon.replace(/Icon$/, '');
    //console.log("asd");
    return React.createElement(asyncComponent({
        resolve: () => import(
            /* webpackMode: "eager" */
            `../Components/${componentName}`),
        LoadingComponent: ()=> <div>puto</div>
    }),
        {...props}
    )
};

export default AsyncComponent;