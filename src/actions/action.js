import uuid from 'uuid';
import { API_BASE_URL } from '../config';

//////////////////////////// ADD_EXPENSE //////////////////action generator///////////////////////////
export const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const FETCH_EXPENSE_SUCCESS = 'FETCH_EXPENSE_SUCCESS';
export const fetchExpenseSuccess = expenses => ({
  type: FETCH_EXPENSE_SUCCESS,
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
      dispatch(fetchExpenseSuccess(data.expenses));
    });
  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
};

/////////////ERROR////////////
// export const fetchBoardError = ()

//////////////////action generator///////////////////////////
//////////////////////////REMOVE_EXPENSE//////////////////////////////
export const removeExpense = ({ id } = {}) => ({
  ///destructuring the expense object to get the id
  type: 'REMOVE_EXPENSE',
  id
});
//////////////////action generator///////////////////////////
//////////////////////////EDIT_EXPENSE////////////////////////////////
export const editExpense = (id, updates) => ({
  //id and updates dont need any defaults and then we will implicitly reutrn an object
  type: 'EDIT_EXPENSE', //have to have this rememebr
  id,
  updates
});
