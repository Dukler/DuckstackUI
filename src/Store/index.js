import { createStore } from 'redux';
import reducers from './modules';
import AsyncComponent from './../BeLazy/AsyncComponent';

// const middlewares = [
//     fetchMiddleware,
// ];


// export const store = createStore(
//     reducers, /* preloadedState, */
//     composeEnhancers(applyMiddleware(...middlewares))
// );
// const [data, loading] = useListData(constants.ui.home);
// interface IState{
//     components: [];
//     linkList:[];
//     linkList:[];
//     root:{};
//     theme:{};
// }

export const recursiveImport = (components) => {
    components.forEach((cmp) => {
        cmp.AsyncImport = AsyncComponent({
            componentName: cmp.componentName
        });
        cmp.contentFilter = (cmp.contentFilter) ? cmp.contentFilter : "";
        // if (cmp.components) {
        //     recursiveImport(cmp.components)
        // }
    })
}

export const store = createStore(reducers);