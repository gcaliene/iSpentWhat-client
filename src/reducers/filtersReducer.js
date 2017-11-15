
import moment from'moment';

/////////////////REDUCERS////////////////////////////////REDUCERS/////////////////////////////
/////////////////////////////////////FILTER REDUCERS/////////////////////////////////////////////
const filterReducerDefaultState = { //filters is not an array just an object, not like the expenses(multiple expenses)
    text: '', 
    sortBy: 'date', //value can change from date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
};

export default ( state= filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state, //we want to spread out the state which by default is filterReducerDefaultState and update it with the next item
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
        return state;
    }
};
//////////////////////END OF REDUCERS///////\\\\