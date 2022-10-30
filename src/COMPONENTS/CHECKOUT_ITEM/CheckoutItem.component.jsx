import React, { useContext } from "react";
import "./CheckoutItem.style.scss";
import { useDispatch } from "react-redux";
import { decItem, delItem, incItem } from "../../ACTIONS/cart.action";

export const CheckoutItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={props.item.imageUrl} alt={props.item.name} />
      </div>
      <span className="name">{props.item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(decItem(props.item))}>
          &#10094;
        </div>
        <span className="value">{props.item.quantity}</span>
        <div className="arrow" onClick={() => dispatch(incItem(props.item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{props.item.price}</span>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(delItem(props.item));
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
