import Loadable from 'react-loadable'
import { getIcon } from '../Utils/icons';

const LazyComponent = props => {
    const {type,LoadingComponent} = props;
    const getImport = () => {
        switch (type) {
            case 'mIcon':
                return getIcon(props);
            default:
                return () => import(
                /* webpackMode: "lazy-once" */
                    `../${props.root}/${props.className}`
                );
        }
    }

    return Loadable ({
        loader: getImport(),
        loading: () => LoadingComponent ? LoadingComponent : null
    })

};

export default LazyComponent;