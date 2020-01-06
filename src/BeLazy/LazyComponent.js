import React from "react";


const LazyComponent = (props) => {
    const { create, className, root } = props;
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