import React, { useContext } from "react";
import "./CartIcon.style.scss";
import { ReactComponent as ShopingIcon } from "../../ASSESTS/shopping-bag.svg";
import { CartContext } from "../../CONTEXT/Cart.context";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
