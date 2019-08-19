import {ActionTypes} from '../constants/actionTypes';

export const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CART.ADD_ITEM_INTO_CART:
            return {
                ...state,
                items: state.items.concat(action.payload.item)
            };
        default:
            return state;
    }
};

export default cartReducer;