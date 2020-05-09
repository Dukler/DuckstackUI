import loadable from "@loadable/component";

const LazyComponent = (props) => {
    const {create, className, root} = props;
    const importStatement = () => import(`../Component/${root}/${className}`);
    const Component = loadable(importStatement);

    if (create) {
        const React = require("react");
        return React.createElement(Component);
    } else {
        return Component;
    }
};

export default LazyComponent;
