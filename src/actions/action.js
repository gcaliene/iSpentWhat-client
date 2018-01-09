//import uuid from 'uuid';
import { API_BASE_URL } from '../config';

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
      .then(response => response.json())
      .then(json => dispatch(registerUserSuccess(json)))
      .catch(e => console.log(e));
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
      // body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(e => console.log(e));
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
      .then(response => response.json())
      .then(json => {
        const { authToken } = json;
        console.log(authToken);
        localStorage.setItem('token', authToken);
        dispatch(loginUserSuccess(authToken));
      })
      .catch(e => console.log(e));
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
      .catch(e => console.log(e));
  };
};

////////////////////EXPENSES///////////////////
//////////////////////////// ADD_EXPENSE //////////////////action generator///////////////////////////

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
    });

  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
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
    .then(response => response.json())
    .then(expenses => dispatch(fetchExpensesSuccess(expenses)));
};

/////////////ERROR////////////
//

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
  const authToken = localStorage.getItem('token');

  fetch(`${API_BASE_URL}/expenses/${_id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(updates)
  })
    .then(response => response.json())
    .then(expenses => dispatch(fetchExpensesSuccess(expenses)))
    .then(console.log('updated'));
  // .catch(err => {
  //     dispatch(fetchBoardError(err));
  // });
};
// });
// };
// });
// };
