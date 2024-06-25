import React, {useContext} from 'react';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CartContext} from "../../context/cart.context";
import {Name, Price, Footer, ProductCardContainer} from "./product-card.styles";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const {addToCart} = useContext(CartContext)
    const addProductToCart = () => {
        addToCart(product)
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