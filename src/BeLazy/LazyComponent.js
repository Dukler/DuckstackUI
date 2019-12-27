// import Loadable from 'react-loadable'
import React from "react";


const LazyComponent = (props) => {
    const { create, className, root } = props;
    // const importString = className === "SimpleList" ? `../${root}/${className}/index` : `../${root}/${className}`
    // const importStatement = className === "SimpleList" ? () => import(`../${root}/${className}/index`) : () => import(`../${root}/${className}`)
    const importStatement = () => import(`../${root}/${className}`);
    const Component = React.lazy(importStatement);

    Component.preload = importStatement;

    if (create) {
        return React.createElement(Component);
    } else {
        return Component;
    }
}

export default LazyComponent;
