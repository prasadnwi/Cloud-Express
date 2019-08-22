import {ActionTypes} from '../constants/actionTypes';
import {products} from "../constants/products";

// get a product details using product id
export const getProductDetails = (productId) => dispatch => {
    let product = {};

    if (productId) {
        product = products.filter(product => parseInt(product.id, 10) === parseInt(productId, 10));
    }
    dispatch({
        type: ActionTypes.PRODUCT_DETAILS.GET_PRODUCT_DETAIL,
        payload: {
            product: product[0]
        }
    })
};

export const clearDetails = () => dispatch => {
    dispatch({
        type: ActionTypes.PRODUCT_DETAILS.CLEAR_PRODUCT_DETAILS,
        payload: {
            product: {}
        }
    })
};