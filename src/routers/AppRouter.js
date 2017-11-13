import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "../components/Header";
import SplashPage from "../components/SplashPage";
import DashboardPage from "../components/DashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from '../components/EditExpensePage';


// import logo from './logo.svg';
// import './App.css';

const AppRouter = () => {
    <BrowserRouter>
        <Header />
        <Route exact path="/" component={SplashPage} />
        <Route exact path='/dashboard' component={DashboardPage}/>
        <Route path="/dashboard/create" component={AddExpensePage} />
        <Route path='/dashboard/edit/:id' component={EditExpensePage} />
    </BrowserRouter>

}

export default AppRouter;
