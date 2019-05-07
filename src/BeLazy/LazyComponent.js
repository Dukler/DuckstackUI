import Loadable from 'react-loadable'
import { getIcon } from '../Utils/icons';


const LazyComponent = props => {
    const {type,LoadingComponent,create} = props;
    const getImport = () => {
        switch (type) {
            case 'mIcon':
                return getIcon(props);
            default:
                return () => import(
                /* webpackMode: "lazy", 
                webpackChunkName: '[request]' */
                    `../${props.root}/${props.className}`
                );
        }
    }
    const enhance = () =>{
        const comp = Loadable({
            loader: getImport(),
            loading: () => LoadingComponent ? LoadingComponent : null
        })
        if(create){
            const React = require('react')
            return React.createElement(comp);
        }else{
            return comp;
        }
    }

    return enhance();

};

export default LazyComponent;