import {asyncComponent} from "react-async-component";


const AsyncComponent = props => {
    //let iconName = icon.replace(/Icon$/, '');
    let loadingComponent = null;
    let errorComponent = null;
    let {create} = props
    if (props.loadingComponent){
        loadingComponent = props.loadingComponent;
    }
    if (props.errorComponent){
        errorComponent = props.errorComponent;
    }
    const getImport = () =>{
        switch(props.type){
            // case 'mCore':
            //     const fuckery = 'Paper'
            //     return () => import(
            //         /* webpackMode: "eager" */
            //         /* webpackExclude: "^.\/node_modules\/@material-ui\/core\/es" */
            //         `@material-ui/core/${fuckery}`
            //     )
                
            case 'mIcon':
                return () => import(
                    /* webpackMode: "eager" */
                    `@material-ui/icons/${props.className}`
                )
            default:
                return () => import(
                    /* webpackMode: "eager" */
                    `../${props.root}/${props.className}`
                );
        }
    }
    var component = null
    if (create){
        const React = require('react')
        component = React.createElement(asyncComponent({
            resolve: getImport(),
            LoadingComponent: () => loadingComponent,
            ErrorComponent: () => errorComponent
        }))
    }else{
        component = asyncComponent({
            resolve: getImport(),
            LoadingComponent: () => loadingComponent,
            ErrorComponent: () => errorComponent
        })
    }
    return component
};

export default AsyncComponent;