import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { Router, Route} from 'react-router';

import Store from './store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from "./containers/AppContainer";

ReactDOM.render((
    <Provider store={Store}>
        <AppContainer />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
