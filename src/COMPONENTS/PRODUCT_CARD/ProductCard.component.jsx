import "./ProductCard.style.scss";
import { Button, BUTTON_CLASSES } from "../BUTTON/Button.component";
import { useContext } from "react";
import { CartContext } from "../../CONTEXT/Cart.context";
export const ProductCard = (props) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(props.product);
  };
  return (
    <div className="product-card-container">
      <img src={props.product.imageUrl} alt={props.product.name} />
      <div className="footer">
        <span className="name">{props.product.name}</span>
        <span className="price">{props.product.price}</span>
      </div>
      <Button
        buttonType={BUTTON_CLASSES.base}
        onClick={() => {
          addProductToCart(addItemToCart);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};
