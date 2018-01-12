import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';

import ExpenseForm from './ExpenseForm';
import Header from '../Header';

import { addExpenseToBackend } from '../../actions/action';

import '../../css/AddExpensePage.css';

const AddExpensePage = props => (
  <div>
    <Header />
    <div className="container add-expense-wrapper">
      <h1 className="add-expense-title">Add Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpenseToBackend(expense));
          props.history.push('/dashboard');
        }}
      />
    </div>

    <NavLink id="exit-add-expense" exact to="/dashboard" className=" ">
      <h1 className="is-active-logo">
        <i className="fas fa-times fa-3x cross-exit" />
      </h1>
    </NavLink>
  </div>
);

export default connect()(AddExpensePage);
