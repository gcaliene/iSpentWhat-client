import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../routers/AppRouter';
import {Provider} from "react-redux";
import store from '../store/configureStore';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
                  <Provider store={store}>    
                    <AppRouter /> 
                  </Provider>, div);
});
