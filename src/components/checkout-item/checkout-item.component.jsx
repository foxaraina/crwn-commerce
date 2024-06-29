import {
    Arrow,
    BaseSpan,
    CheckoutItemContainer,
    ImageContainer,
    Quantity,
    RemoveButton,
    Value
} from "./checkout-item.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selectors";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.slice";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const addItemHandler = () => dispatch(addItemToCart(cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem))
    const checkoutItemHandler = () => dispatch(clearItemFromCart(cartItem))

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan> {price}</BaseSpan>
            <RemoveButton onClick={checkoutItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;