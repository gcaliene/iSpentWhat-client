import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './css/index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; //allows us to provide the store to all the compoents that make up the app
import configureStore from './store/configureStore';

//saw bottom from dan abramov https://www.youtube.com/watch?v=VJ38wSFbM3A
const store = configureStore(); //will get access to disptch getState, subscribe

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
