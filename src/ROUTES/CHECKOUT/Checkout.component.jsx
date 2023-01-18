import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { CheckoutItem } from "../../COMPONENTS/CHECKOUT_ITEM/CheckoutItem.component";
import { CartContext } from "../../CONTEXT/Cart.context";
import "./checkout.style.scss";
export const Checkout = () => {
  const { cartDetails } = useSelector((state) => {
    return state;
  });

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
      {cartDetails.cartItems.map((item, i) => {
        return <CheckoutItem key={i} item={item} />;
      })}
      <span className="total">Total:{cartDetails.total}</span>
    </div>
  );
};
