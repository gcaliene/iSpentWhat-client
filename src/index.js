import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";  //allows us to provide the store to all the compoents that make up the app

ReactDOM.render(
    <Provider store={store}>    
        <AppRouter /> 
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
