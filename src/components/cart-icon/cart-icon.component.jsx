import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CartIconWrapper, ItemCount} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectCartIsOpen} from "../../store/cart/cart.selectors";
import {setCartOpen} from "../../store/cart/cart.slice";

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectCartIsOpen)

    return (
        <CartIconWrapper onClick={() => dispatch(setCartOpen(!isCartOpen))}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconWrapper>
    );
};

export default CartIcon;