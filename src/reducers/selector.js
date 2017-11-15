

import moment from 'moment';

////////////////////////// Get visisble expenses//////////////////////////////////////////////////////////////////////
export default (expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;             //typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch =   endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;                    //typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase()) ;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if ( sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if ( sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

// //After talking with Dan Abramov (founder of Redux) he has been preaching the colocation of functions called selectors with your reducers.

// What is a selector?

// Selectors can compute derived data, allowing Redux to store the minimal possible state.
// Selectors are composable. They can be used as input to other selectors.
// Let's turn our filter into a selector.

//https://gist.github.com/abhiaiyer91/aaf6e325cf7fc5fd5ebc70192a1fa170