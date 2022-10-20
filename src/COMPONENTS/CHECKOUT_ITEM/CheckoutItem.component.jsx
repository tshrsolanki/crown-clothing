import React, { useContext } from "react";
import { CartContext } from "../../CONTEXT/Cart.context";
import "./CheckoutItem.style.scss";

export const CheckoutItem = (props) => {
  const { removeItem, addingQuantity, decQuantity } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={props.item.imageUrl} alt={props.item.name} />
      </div>
      <span className="name">{props.item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decQuantity(props.item)}>
          &#10094;
        </div>
        <span className="value">{props.item.quantity}</span>
        <div className="arrow" onClick={() => addingQuantity(props.item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{props.item.price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItem(props.item);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
