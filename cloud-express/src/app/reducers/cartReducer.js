import {ActionTypes} from '../constants/actionTypes';

export const initialState = {
    items: [],
    newlyAddedItem: {}
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CART.ADD_ITEM_INTO_CART:
            return {
                ...state,
                newlyAddedItem: action.payload.item
            };

        case ActionTypes.CART.UPDATE_CART:
            return {
                ...state,
                items: action.payload.items
            };
        default:
            return state;
    }
};

export default cartReducer;