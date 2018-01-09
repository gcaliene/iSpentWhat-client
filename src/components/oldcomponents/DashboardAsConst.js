import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilters from './ExpenseFilters';
import Header from '../Header';

const DashboardPage = () => (
  // implicitly returning so no curlies need
  <div>
    <Header />
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
