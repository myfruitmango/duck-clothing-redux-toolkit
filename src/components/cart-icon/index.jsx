// ** React Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// ** Store Imports
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/selector";
import { setIsCartOpen } from "../../store/cart/reducer";

// ** Styles Imports
import { CartIconContainer, ItemCount, ShoppingIcon } from "./styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  //  ! selector
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  // ! handler
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
