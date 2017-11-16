import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "../components/Header";
// import SplashPage from "../components/SplashPage";
import DashboardPage from "../components/DashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from '../components/EditExpensePage';


// import logo from './logo.svg';
// import './App.css';

const AppRouter = () => (
    
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route path="/create" component={AddExpensePage} />
                    <Route path='/edit/:id' component={EditExpensePage} />
                </Switch>
            </div>
        </BrowserRouter>
        )


export default AppRouter
