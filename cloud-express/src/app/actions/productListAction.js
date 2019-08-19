import {ActionTypes} from '../constants/actionTypes';
import {products} from "../constants/products";

export const getProductList = () => dispatch => {
    dispatch({
        type: ActionTypes.PRODUCT_LIST.GET_ALL_PRODUCTS,
        payload: {
            products: products
        }
    });
};