import {ActionTypes} from '../constants/actionTypes';

export const addItemIntoCart = (item) => dispatch => {
    dispatch({
        type: ActionTypes.CART.ADD_ITEM_INTO_CART,
        payload: {
            item
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

export const updateCart = (items) => (dispatch) => {
    dispatch({
        type: ActionTypes.CART.UPDATE_CART,
        payload: {
            items
        }
    })
};