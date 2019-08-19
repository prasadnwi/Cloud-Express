import {ActionTypes} from '../constants/actionTypes';

export const initialState = {
    products: []
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCT_LIST.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            };
        default:
            return state;
    }
};

export default productListReducer;