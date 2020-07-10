import React from 'react';
import ReactDOM from 'react-dom';
/* import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk"; */
/* import Reducers from "./reducers/index"; */
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

/* const store = createStore(Reducers,applyMiddleware(thunk)); */

ReactDOM.render(
  
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
