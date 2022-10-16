import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CONTEXT/Cart.context";
import { Button } from "../BUTTON/Button";
import { CartItem } from "../CART_ITEM/CartItem.component";
import "./CartDropdown.style.scss";
export const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item, i) => {
          return <CartItem key={i} cartItem={item} />;
        })}
      </div>
      <Button
        onClick={() => {
          setIsCartOpen(false);
          goToCheckout();
        }}
      >
        CHECKOUT
      </Button>
    </div>
  );
};
