import {ActionTypes} from '../constants/actionTypes';

export const initialState = {
    product: {}
};

const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCT_DETAILS.GET_PRODUCT_DETAIL:
            return {
                ...state,
                product: action.payload.product
            };

        case ActionTypes.PRODUCT_DETAILS.CLEAR_PRODUCT_DETAILS:
            return {
                ...state,
                product: action.payload.product
            };

        default:
            return state;
    }
};

export default productDetailsReducer;