import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import Header from '../Header';

import { addExpenseToBackend } from '../../actions/action';

const AddExpensePage = props => (
  <div>
    <Header />
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpenseToBackend(expense));
        props.history.push('/dashboard');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
