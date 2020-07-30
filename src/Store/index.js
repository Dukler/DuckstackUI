import {createStore, applyMiddleware} from "redux";
import reducers from "./modules";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./middleware/sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducers,
    applyMiddleware(
        sagaMiddleware,
        require("redux-immutable-state-invariant").default()
    )
);

sagaMiddleware.run(rootSaga);
