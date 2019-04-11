import React from 'react';
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import UI from './App/UI';
import './index.css';
import { StoreContext } from 'redux-react-hook';
import { store } from './Store';

//const {store} = makeStore();


ReactDOM.render(
    <StoreContext.Provider value={store}>
        <UI />
    </StoreContext.Provider>, 
    document.getElementById('root')
);

registerServiceWorker();