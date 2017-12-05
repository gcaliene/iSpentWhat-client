////////////////////REDUCERS////////////////////////////////REDUCERS////////////////////////////
///////////////////////////////////////EXPENSE REDUCER///////////////////REDUCER////////////////
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': ///remember that you don't want to change the array so don't use Push
      return [
        /// state.concat(action.expense);  we are going to use the spread operator
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id; //returns only those objects that dont match the id of the action.id
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        //now we are going to map which allows us to go through every single item and do some conditional logic to change some of them. and pass along the updator function {}
        if (expense.id === action.id) {
          //expense id is the current item in the array it is checking and action.id the one we are changing
          return {
            ...expense, // we are going to grab all the props in the object{} grab id, descr, amount...
            ...action.updates // putting this after the ...expense will override any matching props
          };
        } else {
          return expense;
        }
      });
    case 'FETCH_EXPENSE_SUCCESS':
      return [...action.expenses]; //this is going to be an array not an object, Jim really helped out on this one.

    default:
      return state;
  }
};

//since there is only one thing to get out of here, we will use the default export
