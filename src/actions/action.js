//import uuid from 'uuid';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

//////USER REGISTRATION AND LOGIN//////////////
const registerUserSuccess = user => ({
  type: 'REGISTER_USER_SUCCESS',
  user
});

export const loginUserSuccess = token => ({
  type: 'LOGIN_USER_SUCCESS',
  token
});

export const registerUser = (username, password) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => {
        res.json();
      })
      .then(json => {
        dispatch(registerUserSuccess(json));
      })
      .then(() => {
        alert('You are now registered, please login with your details.');
        window.location = '/';
      })
      .catch(error => {
        return alert(
          `Code: ${error.code} at '${error.location}' saying: ${
            error.message
          }  `
        );
      });
  };
};

export const protectedEnpointTesting = () => {
  console.log('we made it');
  const authToken = localStorage.getItem('token');
  return dispatch => {
    fetch(`${API_BASE_URL}/api/protected/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(response => {
        response.json();
      })
      // .then(json => console.log(json))
      .catch(error => {
        return alert(
          `Code: ${error.code} at '${error.location}' saying: ${
            error.message
          }  `
        );
      });
  };
};

export const loginUser = (username, password) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => normalizeResponseErrors(res))
      .then(response => response.json())
      .then(json => {
        const { authToken } = json;
        // console.log(authToken);
        localStorage.setItem('token', authToken);
        dispatch(loginUserSuccess(authToken));
        window.location = '/dashboard';
      })
      .catch(e => {
        console.log(e);
        alert('Please Check Your Username and Password');
      });
  };
};

export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const fetchCurrentUserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  user
});

export const getCurrentUser = () => {
  const authToken = localStorage.getItem('token');
  return dispatch => {
    fetch(`${API_BASE_URL}/currentUser`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(username => {
        dispatch(fetchCurrentUserSuccess(username));
      })
      .catch(e => {
        console.log('No user logged in.');
      });
  };
};

////////////////////EXPENSES///////////////////
//////////////////////////// FETCH_EXPENSES & ADD_EXPENSE //////////////////action generator///////////////////////////

export const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS';
export const fetchExpensesSuccess = expenses => ({
  type: FETCH_EXPENSES_SUCCESS,
  expenses
});

export const fetchExpenses = () => dispatch => {
  const authToken = localStorage.getItem('token');
  fetch(`${API_BASE_URL}/expenses`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchExpensesSuccess(data.expenses));
    })
    .catch(e => console.log(e));
};

export const addExpenseToBackend = expense => dispatch => {
  const authToken = localStorage.getItem('token');

  fetch(`${API_BASE_URL}/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(expense)
  })
    .then(response => console.log(response))
    .catch(e => console.log(e));
};

//////////////////action generator///////////////////////////
//////////////////////////REMOVE_EXPENSE//////////////////////////////

export const deleteExpenseFromBackend = _id => dispatch => {
  const authToken = localStorage.getItem('token');

  fetch(`${API_BASE_URL}/expenses/${_id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => dispatch(fetchExpenses()))
    .catch(e => console.log(e));
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
  const authToken = localStorage.getItem('token');

  fetch(`${API_BASE_URL}/expenses/${_id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(updates)
  })
    .then(() => dispatch(fetchExpenses()))
    .catch(e => console.log(e));
};
