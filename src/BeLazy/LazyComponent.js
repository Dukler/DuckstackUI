// import Loadable from 'react-loadable'
import React from "react";


const LazyComponent = (props) => {
    const { create, className, root } = props;
    // const importString = className === "SimpleList" ? `../${root}/${className}/index` : `../${root}/${className}`
    // const importStatement = className === "SimpleList" ? () => import(`../${root}/${className}/index`) : () => import(`../${root}/${className}`)
    let name = root === "Standalone" ? "Standalone" : root;
    name = root === "Standalone/Items" ? "Standalone/Items" : name;
    name = root === "Standalone/Buttons" ? "Standalone/Buttons" : name;
    name = root === "Standalone/Pickers" ? "Standalone/Pickers" : name;
    name = root === "Containers" ? "Container" : name;
    const importStatement = () => import(`../Components/${root}/${className}`);
    const Component = React.lazy(importStatement);

    Component.preload = importStatement;

    if (create) {
        return React.createElement(Component);
    } else {
        return Component;
    }
}

export default LazyComponent;
