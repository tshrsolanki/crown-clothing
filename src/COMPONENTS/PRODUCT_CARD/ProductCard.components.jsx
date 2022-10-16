import "./ProductCard.style.scss";
import { Button } from "../BUTTON/Button";
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
        buttonType={"inverted"}
        onClick={() => {
          addProductToCart(addItemToCart);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};
