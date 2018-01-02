import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense, addExpenseToBackend } from '../actions/action';

const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpenseToBackend(expense));
        // props.dispatch(addExpense(expense));
        // props.history.push('/create');
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
