// ** React Imports
import React from "react";
import { useDispatch } from "react-redux";

// ** Store Imports
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/reducer";

// ** Styles Imports
import {
  Arrow,
  Value,
  BaseSpan,
  Quantity,
  RemoveButton,
  ImageContainer,
  CheckoutItemContainer,
} from "./styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  // ! props
  const { name, imageUrl, price, quantity } = cartItem;

  // ! handler
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
