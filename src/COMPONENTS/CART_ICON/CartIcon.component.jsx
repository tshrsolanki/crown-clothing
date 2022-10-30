import React, { useContext } from "react";
import "./CartIcon.style.scss";
import { ReactComponent as ShopingIcon } from "../../ASSESTS/shopping-bag.svg";
import { CartContext } from "../../CONTEXT/Cart.context";
import { useSelector } from "react-redux";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);
  const { cartDetails } = useSelector((state) => state);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartDetails.count}</span>
    </div>
  );
};
