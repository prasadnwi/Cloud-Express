import {combineReducers} from 'redux';
// actions
import productListReducer from './productListReducer';
import cartReducer from './cartReducer';
import productDetailsReducer from './productDetailsReducer';

const rootReducer = combineReducers({
    productListReducer,
    cartReducer,
    productDetailsReducer
});

export default rootReducer;