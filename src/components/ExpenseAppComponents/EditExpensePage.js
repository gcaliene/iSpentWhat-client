import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { NavLink } from 'react-router-dom';

import Header from '../Header';

import {
  editExpenseToBackend,
  deleteExpenseFromBackend
} from '../../actions/action';

import '../../css/AddExpensePage.css';

const EditExpensePage = props => {
  // console.log('Props below');
  // console.log(props); //just making sure react router is actually passing stuff in
  // console.log('props.match.params.id=' + props.match.params.id); //gives id
  return (
    <div>
      <Header />
      <div className="container edit-expense-wrapper">
        <h1 className="add-expense-title">Edit Expense</h1>

        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.dispatch(
              editExpenseToBackend(props.match.params.id, expense)
            );
            console.log('updated', expense);
            props.history.push('/dashboard');
          }}
        />
        <button
          className="delete-button"
          expense={props.expense}
          onClick={() => {
            props.dispatch(deleteExpenseFromBackend(props.match.params.id));
            props.history.push('/dashboard');
          }}
        >
          <i class="fa fa-trash fa-3x" aria-hidden="true" />
        </button>
        <NavLink id="exit-add-expense" exact to="/dashboard" className=" ">
          <h1 className="is-active-logo">
            <i className="fas fa-times fa-5x cross-exit" />
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  //we want to give the  component the current expense object
  return {
    expense: state.expenses.find(expense => {
      return expense._id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
