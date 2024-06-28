import React from 'react';
import Button from "../button/button.component";
import "./cart-dropdown.styles"
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selectors";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)


    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("checkout")
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        <>
                            {cartItems.map(product => (
                                <CartItem cartItem={product} key={product.id}/>
                            ))}
                        </> : (
                            <EmptyMessage>Cart is empty</EmptyMessage>
                        )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;