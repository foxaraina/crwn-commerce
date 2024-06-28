import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CartIconWrapper, ItemCount} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectCartIsOpen} from "../../store/cart/cart.selectors";
import {setCartIsOpen} from "../../store/cart/cart.actions";

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectCartIsOpen)

    return (
        <CartIconWrapper onClick={() => dispatch(setCartIsOpen(!isCartOpen))}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconWrapper>
    );
};

export default CartIcon;