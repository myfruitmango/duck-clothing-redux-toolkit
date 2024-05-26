// ** React Imports
import React, { useSelector } from "react-redux";

// ** Store Imports
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/selector";

// ** Components Imports
import CheckoutItem from "../../components/checkout-item";

// ** Styles SCSS Imports
import "./styles.scss";

const Checkout = () => {
  // ! selector
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};
export default Checkout;
