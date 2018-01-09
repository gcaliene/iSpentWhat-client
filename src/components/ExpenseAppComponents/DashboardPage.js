import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilters from './ExpenseFilters'


const DashboardPage = () => ( // implicitly returning so no curlies need
    <div>
        <ExpenseFilters />
        <ExpenseList />
    </div>
)


export default DashboardPage;