// import Loadable from 'react-loadable'
import React from "react";


const LazyComponent = (props) => {
    const { create, className, root } = props;
    // const importString = className === "SimpleList" ? `../${root}/${className}/index` : `../${root}/${className}`
    // const importStatement = className === "SimpleList" ? () => import(`../${root}/${className}/index`) : () => import(`../${root}/${className}`)
    let name = root === "Components" ? "Components/Standalone" : root;
    name = root === "Components/Items" ? "Components/Standalone/Items" : name;
    name = root === "Components/Buttons" ? "Components/Standalone/Buttons" : name;
    name = root === "Components/Pickers" ? "Components/Standalone/Pickers" : name;
    name = root === "Wrappers" ? "Components/Container" : name;
    const importStatement = () => import(`../${name}/${className}`);
    const Component = React.lazy(importStatement);

    Component.preload = importStatement;

    if (create) {
        return React.createElement(Component);
    } else {
        return Component;
    }
}

export default LazyComponent;
