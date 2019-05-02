import { createStore, applyMiddleware } from 'redux';
import reducers from './modules';
//import {logger} from './middleware/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga  from './middleware/sagas';


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers,
    applyMiddleware(
        //logger,
        sagaMiddleware,
    )
);

sagaMiddleware.run(rootSaga)