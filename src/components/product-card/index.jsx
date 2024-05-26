import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import Button, { BUTTON_TYPE_CLASSES } from "../button";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

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
