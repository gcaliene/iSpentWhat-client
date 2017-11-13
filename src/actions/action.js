import uuid from 'uuid';

//////////////////////////// ADD_EXPENSE //////////////////action generator///////////////////////////
export const addExpense =  (
    { 
        description = '', 
        note ='', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//////////////////action generator///////////////////////////
//////////////////////////REMOVE_EXPENSE//////////////////////////////
export const removeExpense = ({id} = {}) => ({  ///destructuring the expense object to get the id 
    type: 'REMOVE_EXPENSE',
    id
})
//////////////////action generator///////////////////////////
//////////////////////////EDIT_EXPENSE////////////////////////////////
export const editExpense = (id, updates) => ({  //id and updates dont need any defaults and then we will implicitly reutrn an object
    type: 'EDIT_EXPENSE', //have to have this rememebr 
    id,
    updates
})