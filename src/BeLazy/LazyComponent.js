// import Loadable from 'react-loadable'
import React from "react";


const LazyComponent = (props) => {
    // LoadingComponent
    const { type, create, className, root } = props;
    const getImport = () => {
        switch (type) {
            default:
                return () => import(
                    /* webpackMode: "lazy", 
                    webpackChunkName: '[request]' */
                    `../${root}/${className}`
                );
        }
    }
    const enhance = () => {
        // const comp = Loadable({
        //     loader: getImport(),
        //     loading: () => LoadingComponent ? LoadingComponent : null
        // })
        const comp = React.lazy(getImport());
        if (create) {
            return React.createElement(comp);
        } else {
            return comp;
        }
    }

    return enhance();

};

export default LazyComponent;

/* webpackMode: "lazy",
webpackChunkName: '[request]' */