import {combineReducers} from 'redux';
// reducers
import productListReducer from './productListReducer';

const rootReducer = combineReducers({
    productListReducer
});

export default rootReducer;