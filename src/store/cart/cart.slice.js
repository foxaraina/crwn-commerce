import {createSlice} from "@reduxjs/toolkit";


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

const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartTotal: 0,
    cartCount: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems = addCartItem(state.cartItems, action.payload)
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = removeItem(state.cartItems, action.payload)
        },
        clearItemFromCart: (state, action) => {
            state.cartItems = clearItem(state.cartItems, action.payload)
        },

        setCartOpen: (state, action) => {
            state.isCartOpen = action.payload;
        },
    }
})

export const {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
    setCartOpen} = cartSlice.actions;

export const {reducer: cartReducer} = cartSlice