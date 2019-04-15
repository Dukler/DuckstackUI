import { createStore } from 'redux';
import AsyncComponent from './../BeLazy/AsyncComponent';
import reducers from './modules';


export const recursiveImport = (components) => {
    components.forEach((cmp) => {
        cmp.AsyncImport = AsyncComponent({
            componentName: cmp.componentName
        });
        // if (cmp.components) {
        //     recursiveImport(cmp.components)
        // }
    })
}

export const store = createStore(reducers);