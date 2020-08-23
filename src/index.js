import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Axios from "axios";
import {Provider} from "react-redux";
import Store from "./redux/Store";

Axios.defaults.baseURL = "http://localhost:8080"

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)


render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();