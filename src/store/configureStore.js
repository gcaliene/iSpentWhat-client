import { createStore, combineReducers } from "redux"; //we need to combine the two reducers
import expensesReducer from '../reducers/reducer';
import filtersReducer  from "../reducers/filtersReducer";  




export default () => {
    //////////////////Store Creation//////////////////////
        const store = createStore(
            combineReducers({
                expenses: expensesReducer,
                filters: filtersReducer,
            }), 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
    }
    