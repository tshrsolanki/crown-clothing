import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./Navigation.style.scss";
import { signOutUser } from "../../UTILS/firebase.utils";
import { ReactComponent as Crown } from "../../ASSESTS/crown.svg";
import { CartIcon } from "../CART_ICON/CartIcon.component";
import { CartDropdown } from "../CART_DROPDOWN/CartDropdown.components";

import { UserContext } from "../../CONTEXT/User.context";
import { CartContext } from "../../CONTEXT/Cart.context";
export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGNOUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGNIN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
