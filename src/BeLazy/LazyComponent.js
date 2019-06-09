import Loadable from 'react-loadable'


const LazyComponent = props => {
    const { type, LoadingComponent, create, className, root } = props;
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
        const comp = Loadable({
            loader: getImport(),
            loading: () => LoadingComponent ? LoadingComponent : null
        })
        if (create) {
            const React = require('react')
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