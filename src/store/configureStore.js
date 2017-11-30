import { createStore, combineReducers, applyMiddleware, compose } from "redux"; //we need to combine the two reducers
import expensesReducer from '../reducers/reducer';
import filtersReducer  from "../reducers/filtersReducer";
import thunk from 'redux-thunk';

const composeDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //////////////////Store Creation//////////////////////
        const store = createStore(
            combineReducers({
                expenses: expensesReducer,
                filters: filtersReducer,
            }),
            composeDevTools(applyMiddleware(thunk))
            //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        return store;
    }
