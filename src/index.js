import React from 'react';
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import UI from './App/UI';
import './index.css';


ReactDOM.render(<UI/>, document.getElementById('root'));

registerServiceWorker();