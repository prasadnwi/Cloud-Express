import {ActionTypes} from '../constants/actionTypes';

export const addItemIntoCart = (item) => dispatch => {
    dispatch({
        type: ActionTypes.CART.ADD_ITEM_INTO_CART,
        payload: {
            item: item
        }
    })
};