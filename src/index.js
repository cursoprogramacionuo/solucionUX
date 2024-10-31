import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom"
import 'antd/dist/reset.css';
import Hotjar from '@hotjar/browser';

import { Provider } from "react-redux";
import store from "./Reducers/store"

//const siteId = 5191130;
//const hotjarVersion = 6;

//Hotjar.init(siteId, hotjarVersion);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
