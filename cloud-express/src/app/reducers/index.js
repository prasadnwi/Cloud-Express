import {combineReducers} from 'redux';
// reducers
import productListReducer from './productListReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    productListReducer,
    cartReducer
});

export default rootReducer;