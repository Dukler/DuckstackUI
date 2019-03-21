import React from 'react';
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Main from "./Main";
import './index.css';


ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();