// ** React Imports
import React from "react";
import { useDispatch } from "react-redux";

// ** Store Imports
import { addItemToCart } from "../../store/cart/reducer";

// ** Components Imports
import Button, { BUTTON_TYPE_CLASSES } from "../button";

// ** Styles Imports
import {
  Name,
  Price,
  Footer,
  ProductCardContainer,
} from "./styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // ! props
  const { name, price, imageUrl } = product;

  // ! dispatch
  const AddProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={AddProductToCart}
      >
        Add to Card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
