// ** React Imports
import React from "react";

// ** Styles Imports
import { ItemDetails, CartItemContainer } from "./styles";

const CartItem = ({ cartItem }) => {
  // ! props
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
