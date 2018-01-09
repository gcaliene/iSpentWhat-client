import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import FrontPage from '../components/FrontPage';
import DashboardPage from '../components/ExpenseAppComponents/DashboardPage';
import AddExpensePage from '../components/ExpenseAppComponents/AddExpensePage';
import EditExpensePage from '../components/ExpenseAppComponents/EditExpensePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/dashboard/create" component={AddExpensePage} />
        <Route exact path="/edit/:id" component={EditExpensePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
