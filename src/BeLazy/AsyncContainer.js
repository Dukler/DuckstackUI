import {asyncComponent} from "react-async-component";

const AsyncContainer = props => {
    //let iconName = icon.replace(/Icon$/, '');
    let loadingComponent = null;
    let errorComponent = null;
    if (props.loadingComponent){
        loadingComponent = props.loadingComponent;
    }
    if (props.errorComponent){
        errorComponent = props.errorComponent;
    }
    return asyncComponent({
        resolve: () => import(
            /* webpackMode: "eager" */
            `../Containers/${props.componentName}`
            ),
        LoadingComponent: ()=> loadingComponent,
        ErrorComponent: ()=> errorComponent
    })
};

export default AsyncContainer;