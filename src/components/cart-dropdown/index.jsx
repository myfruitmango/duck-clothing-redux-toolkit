// ** React Imports
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// ** Store Imports
import { selectCartItems } from "../../store/cart/selector";

// ** Components Imports
import Button from "../button";
import CartItem from "../cart-item";

// ** Styles Imports
import {
  CartItems,
  EmptyMessage,
  CartDropdownContainer,
} from "./styles";

const CartDropdown = () => {
  const navigate = useNavigate();

  // ! selector
  const cartItems = useSelector(selectCartItems);

  // ! Handler
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
