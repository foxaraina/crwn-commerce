import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTIONS_TYPE} from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const exitingCartItem = cartItems.find((item) => item.id === productToAdd.id);

    if (exitingCartItem) {
        return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}
const removeItem = (cartItems, productToRemove) => {
    const exitingCartItem = cartItems.find((item) => item.id === productToRemove.id);
    if (exitingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== productToRemove.id);
    }

    return cartItems.map(item => item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item);
}
const clearItem = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id)
}


export const addToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems)
}
export const removeFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeItem(cartItems, productToRemove)
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems)
}
export const clearCartItem = (cartItems, productToRemove) => {
    const newCartItems = clearItem(cartItems, productToRemove)
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems)
}
export const setCartIsOpen = (bool) => createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, bool)