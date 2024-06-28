import {CART_ACTIONS_TYPE} from "./cart.types";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartTotal: 0,
    cartCount: 0
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTIONS_TYPE.SET_IS_CART_OPEN: {
            return {...state, isCartOpen: payload};
        }
        case CART_ACTIONS_TYPE.SET_CART_ITEMS: {
            return {...state, cartItems: payload}
        }
        default:
            return state

    }
}