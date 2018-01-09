const initialState = {
  user: {},
  token: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        user: action.user
      };

    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        token: action.token
      };
    case 'FETCH_CURRENT_USER_SUCCESS':
      // console.log(action);
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default user;
