import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, editExpenseToBackend } from '../actions/action';
import { removeExpense, deleteExpenseFromBackend } from '../actions/action';

const EditExpensePage = props => {
  console.log(props); //just making sure react router is actually passing stuff in
  console.log(props.match.params.id); //gives id
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          // props.dispatch(editExpense(props.expense.id, expense)); //rememver that the editExpenses has 2 parameters in here
          props.dispatch(editExpenseToBackend(props.match.params.id, expense));
          console.log('updated', expense);
          props.history.push('/');
        }}
      />
      <button
        expense={props.expense}
        onClick={() => {
          console.log(props);
          props.dispatch(deleteExpenseFromBackend(props.match.params.id));
          // props.dispatch(removeExpense(props.match.params.id));
          props.history.push('/');
        }}
      >
        {' '}
        Remove{' '}
      </button>
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
