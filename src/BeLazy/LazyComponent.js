import loadable from "@loadable/component";
// import React from "react";

const LazyComponent = (props) => {
    const {create, className, root} = props;
    const importStatement = () => import(`../Component/${root}/${className}`);
    const Component = loadable(importStatement);
    // const React = require("react");
    // const Component = React.lazy(importStatement);
    // Component.preload = importStatement;

    if (create) {
        const React = require("react");
        return React.createElement(Component);
    } else {
        return Component;
    }
};

export default LazyComponent;
