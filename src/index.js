import React from 'react';
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import { StoreContext } from 'redux-react-hook';
import { store } from './Store';
import UI from './UI';

const root = document.getElementById('root');

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <UI />
    </StoreContext.Provider>,
    root
);

registerServiceWorker();