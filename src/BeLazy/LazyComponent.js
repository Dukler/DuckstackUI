import loadable from "@loadable/component";
// import React from "react";

const LazyComponent = (props) => {
    const {create, className, root} = props;
    const importComponent = () => import(`../Component/${root}/${className}`);
    // const importDispatch = () => import(`../Component/${root}/${className}/reducer`);
    const Component = loadable(importComponent);
    // const React = require("react");
    // const Component = React.lazy(importStatement);
    // Component.preload = importStatement;
    // Component.reducer = () =>
    //     import(`../Component/${root}/${className}/reducer`);
    // import(`../Component/${root}/${className}/reducer`)
    //     .then((reducer) => {
    //         Component.reducer = reducer.default;
    //     })
    //     .catch((err) => {
    //         console.log("asd");
    //     });

    if (create) {
        const React = require("react");
        return React.createElement(Component);
    } else {
        return Component;
    }
};

export default LazyComponent;
