//import uuid from 'uuid';
import { API_BASE_URL } from '../config';

//////////////////////////// ADD_EXPENSE //////////////////action generator///////////////////////////
export const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    //id: uuid(), // mongoose does
    description,
    note,
    amount,
    createdAt
  }
});

export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';
export const fetchExpensesSuccess = expenses => ({
  type: FETCH_EXPENSES_SUCCESS,
  expenses
});

export const fetchExpenses = () => dispatch => {
  fetch(`${API_BASE_URL}/expenses`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchExpensesSuccess(data.expenses));
    });
  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
};

export const addExpenseToBackend = (
  description,
  note,
  amount,
  createdAt
) => dispatch => {
  fetch(`${API_BASE_URL}/expenses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, note, amount, createdAt })
  })
    .then(response => response.json())
    .then(expenses => dispatch(fetchExpensesSuccess(expenses)));
  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
};

/////////////ERROR////////////
// export const fetchBoardError = ()

//////////////////action generator///////////////////////////
//////////////////////////REMOVE_EXPENSE//////////////////////////////
export const removeExpense = ({ _id } = {}) => ({
  ///destructuring the expense object to get the id
  type: 'REMOVE_EXPENSE',
  _id
});

export const deleteExpenseFromBackend = _id => dispatch => {
  fetch(`${API_BASE_URL}/expenses/${_id}`, {
    method: 'delete'
  })
    .then(response =>
      response.json().then(json => {
        return json;
      })
    )
    .then(expenses => dispatch(fetchExpensesSuccess(expenses)));
  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
};

//////////////////action generator///////////////////////////
//////////////////////////EDIT_EXPENSE////////////////////////////////
export const editExpense = (id, updates) => ({
  //id and updates dont need any defaults and then we will implicitly reutrn an object
  type: 'EDIT_EXPENSE', //have to have this rememebr
  id,
  updates
});

export const editExpenseToBackend = (_id, updates) => dispatch => {
  fetch(`${API_BASE_URL}/expenses/${_id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  })
    .then(response => response.json())
    .then(expenses => dispatch(fetchExpensesSuccess(expenses)))
    .then(console.log('updated'));
  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
};
