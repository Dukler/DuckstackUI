import Loadable from 'react-loadable'

const priority = {
    CalendarAgenda: "prefetch",
    SubmitButton: "prefetch"
}

const LazyComponent = props => {
    const { type, LoadingComponent, create, className, root } = props;
    const getImport = () => {
        switch (type) {
            case 'mIcon':
                const Icons = require('../Utils/icons');
                return Icons.getIcon(props);
            case 'listItem':
                return () => import(
                    /* webpackMode: "eager",
                    webpackChunkName: '[request]' */
                    `../Components/ListItems/${className}`
                );
            default:
                if (priority[className] === "prefetch") {
                    return () => import(
                        /* webpackMode: "lazy", 
                        webpackChunkName: '[request]',
                        webpackPrefetch: true */
                        `../${root}/${className}`
                    );
                } else {
                    return () => import(
                        /* webpackMode: "lazy", 
                        webpackChunkName: '[request]' */
                        `../${root}/${className}`
                    );
                }

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