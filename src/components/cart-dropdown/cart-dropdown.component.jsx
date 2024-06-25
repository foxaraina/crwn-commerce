import React, {useContext} from 'react';
import {CartContext} from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles"
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("checkout")
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length > 0 ?
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