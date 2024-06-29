import React from 'react';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {Name, Price, Footer, ProductCardContainer} from "./product-card.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selectors";
import {addItemToCart} from "../../store/cart/cart.slice";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const addProductToCart = () => {
        dispatch(addItemToCart(product))
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;