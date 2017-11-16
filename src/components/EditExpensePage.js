import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/action';
import { removeExpense } from '../actions/action';

const EditExpensePage = (props) => {
    console.log(props); //just making sure react router is actually passing stuff in
    return (
        
            <div>
                <ExpenseForm 
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(editExpense(props.expense.id, expense)); //rememver that the editExpenses has 2 parameters in here
                        console.log('updated', expense);
                        props.history.push('/')
                    }}
                />
                <button 
                    expense={props.expense}
                    onClick={ () => {
                        props.dispatch(removeExpense({ id: props.expense.id }))
                        props.history.push('/')
                    }} 
                > Remove </button>
            </div>
        
    )
}


const mapStateToProps =(state , props) => { //we want to give the  component the current expense object
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

export default connect (mapStateToProps) (EditExpensePage);