import React from "react";

function ResponsiveLayout({
    children,
    container = false,
    item = false,
    ...rest
}) {
    const Render = container
        ? require("./Container").default
        : require("./Item").default;

    return <Render {...rest}>{children}</Render>;
}

export default ResponsiveLayout;
