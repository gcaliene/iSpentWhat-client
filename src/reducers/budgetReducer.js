////////////////////REDUCERS////////////////////////////////REDUCERS////////////////////////////
///////////////////////////////////////EXPENSE REDUCER///////////////////REDUCER////////////////
const budgetReducerDefaultState = {
  budget: '',
  user: ''
};
export default (state = budgetReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_BUDGET_SUCCESS':
      // console.log(action.budget[0].amount);
      return {
        budget: action.budget[0].amount, //this is going to be an array not an object, Jim really helped out on this one.
        user: action.budget[0].user
      };
    case 'DELETE_BUDGET_SUCCESS':
      return {
        budget: '',
        user: ''
      };
    default:
      return state;
  }
};

//since there is only one thing to get out of here, we will use the default export
