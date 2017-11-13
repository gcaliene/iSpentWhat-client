import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";  //allows us to provide the store to all the compoents that make up the app
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>    
        <AppRouter /> 
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
