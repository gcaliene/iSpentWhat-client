//import uuid from 'uuid';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import $ from 'jquery';

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
        $('#error-username-login').html('');
        $('#error-password-registration').html('');
        $('#error-username-registration').html('');
        $('#input-registration-username').val('');
        $('#input-registration-password').val('');
        $('#error-username-login').removeClass(
          'class-error-username-registration'
        );
        $('#error-username-login').addClass('class-success-username-login');
        $('#error-username-login').removeClass('hidden');
        $('#error-username-login').append(
          `Registration Success! Please Login Below.`
        );
      })
      .catch(error => {
        if (error.location === 'password') {
          $('#error-username-login').html('');
          $('#error-password-registration').html('');
          $('#error-username-registration').html('');
          $('#error-password-registration').removeClass('hidden');
          $('#error-password-registration').append(
            `${error.location.toUpperCase()}: ${error.message}`
          );
        } else {
          $('#error-username-login').html('');
          $('#error-password-registration').html('');
          $('#error-username-registration').html('');
          $('#error-username-registration').removeClass('hidden');
          $('#error-username-registration').append(
            `${error.location.toUpperCase()}: ${error.message}`
          );
        }
      });
  };
};

export const protectedEnpointTesting = () => {
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
      .catch(error => {
        $('#error-username-login').html('');
        $('#error-username-login').html('');
        $('#error-username-login').removeClass('hidden');
        $('#error-username-login').append(
          `${error.location.toUpperCase()}: ${error.message}`
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
        localStorage.setItem('token', authToken);
        dispatch(loginUserSuccess(authToken));
        window.location = '/dashboard';
      })
      .catch(error => {
        $('#error-password-registration').html('');
        $('#error-username-registration').html('');
        $('#error-username-login').html('');
        $('#error-username-login').removeClass('hidden');
        $('#error-username-login').removeClass('class-success-username-login');
        $('#error-username-login').addClass(
          'class-error-username-registration'
        );
        $('#error-username-login').append(
          `Please Check Your Username and Password`
        );
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

export const FETCH_BUDGET_SUCCESS = 'FETCH_BUDGET_SUCCESS';
export const fetchBudgetSuccess = budget => ({
  type: FETCH_BUDGET_SUCCESS,
  budget
});
export const fetchBudget = () => dispatch => {
  const authToken = localStorage.getItem('token');
  fetch(`${API_BASE_URL}/api/budget/`, {
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
      console.log('from getbudget action');
      console.log(data.budget[0]);
      console.log('from getbudget action');

      dispatch(fetchBudgetSuccess(data.budget));
    })
    .catch(e => console.log('No amount for budget found.'));
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
    .then(() => dispatch(fetchExpenses()))
    .catch(e => console.log(e));
};

export const addBudget = budget => dispatch => {
  const authToken = localStorage.getItem('token');
  fetch(`${API_BASE_URL}/api/budget/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(budget)
  })
    .then(() => dispatch(fetchBudget()))
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

export const deleteBudget = () => dispatch => {
  const authToken = localStorage.getItem('token');
  fetch(`${API_BASE_URL}/api/budget`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => {
      console.log('deleted budget');
      dispatch(fetchBudgetSuccess());
    })
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
