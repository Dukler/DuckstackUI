import React from "react";
import { BrowserRouter } from "react-router-dom";

const DSBrowserRouter = React.memo(function DSBrowserRouter(props) {
    const { children } = props;
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
});

export default DSBrowserRouter;