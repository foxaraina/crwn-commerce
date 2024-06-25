import React, {useContext} from 'react';
import {CartContext} from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss"
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("checkout")
    }
    return (
        <div className="cart-dropdown-container">
            {cartItems.map(product => (
                <CartItem cartItem={product} key={product.id}/>
            ))}
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </div>
    );
};

export default CartDropdown;