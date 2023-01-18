import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { signOutUser } from "../../UTILS/firebase.utils";
import { ReactComponent as Crown } from "../../ASSESTS/crown.svg";
import { CartIcon } from "../../COMPONENTS/CART_ICON/CartIcon.component";
import { CartDropdown } from "../../COMPONENTS/CART_DROPDOWN/CartDropdown.components";

import { UserContext } from "../../CONTEXT/User.context";
import { CartContext } from "../../CONTEXT/Cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.style";
import { toast } from "react-toastify";
export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Crown className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGNOUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>SIGNIN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
