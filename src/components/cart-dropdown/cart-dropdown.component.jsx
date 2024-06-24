import React, {useContext} from 'react';
import {CartContext} from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <Button>Go to checkout</Button>
        </div>
    );
};

export default CartDropdown;