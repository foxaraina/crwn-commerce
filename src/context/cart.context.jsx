import {createContext, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCartItem: () => {},
    cartTotal: 0
});

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


const CART_ACTIONS_TYPE = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartTotal: 0,
    cartCount: 0
}

const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTIONS_TYPE.SET_IS_CART_OPEN: {
            return {...state, isCartOpen: payload};
        }
        case CART_ACTIONS_TYPE.SET_CART_ITEMS: {
            return {...state, ...payload}
        }
        default:
            throw new Error(`Unknown action type ${type}`);

    }
}

export const CartProvider = ({ children }) => {
    const [{isCartOpen, cartItems, cartTotal, cartCount}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const addToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItems(newCartItems)
    }
    const removeFromCart = (productToRemove) => {
        const newCartItems = removeItem(cartItems, productToRemove)
        updateCartItems(newCartItems)
    }
    const clearCartItem = (productToRemove) => {
        const newCartItems = clearItem(cartItems, productToRemove)
        updateCartItems(newCartItems)
    }

    const updateCartItems = (newCartItems) => {
        const newCartTotal = newCartItems.reduce((acc, item) => {
            return acc + item.quantity * item.price
        }, 0)
        const newCartCount = newCartItems.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)

        dispatch(createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }))
    }


    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, bool))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addToCart, removeFromCart, cartCount, clearCartItem, cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}