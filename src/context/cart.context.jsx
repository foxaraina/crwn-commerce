import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCartItem: () => {},
    cartTotal: () => {}
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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const addToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems, productToRemove))
    }

    const clearCartItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }
    useEffect(() => {
        setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0))
    }, [cartItems]);

    useEffect(() => {
        setCartTotal(cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0))
    }, [cartItems]);

    const value = {isCartOpen, setIsCartOpen, cartItems, addToCart, removeFromCart, cartCount, setCartCount, clearCartItem, cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}