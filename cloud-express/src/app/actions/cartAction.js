import {ActionTypes} from '../constants/actionTypes';

export const addItemIntoCart = (addedItem) => dispatch => {
    dispatch({
        type: ActionTypes.CART.ADD_ITEM_INTO_CART,
        payload: {
            item: addedItem
        }
    });

    // clear newly added item from store
    setTimeout(() => {
        dispatch({
            type: ActionTypes.CART.ADD_ITEM_INTO_CART,
            payload: {
                item: {}
            }
        })
    }, 100);
};

export const updateCart = (updatedCart) => (dispatch) => {
    dispatch({
        type: ActionTypes.CART.UPDATE_CART,
        payload: {
            items: updatedCart
        }
    })
};