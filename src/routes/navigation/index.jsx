// ** React Imports
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// ** Utils Imports
import { signOutUser } from "../../utils/firebase/firebase";

// ** Store Imports
import { selectIsCartOpen } from "../../store/cart/selector";
import { selectCurrentUser } from "../../store/user/selector";

// ** Components Imports
import CartIcon from "../../components/cart-icon";
import CartDropdown from "../../components/cart-dropdown";

// ** Styles Imports
import {
  NavLink,
  NavLinks,
  LogoContainer,
  NavigationContainer,
} from "./styles.jsx";

// ** Assets Imports
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  // ! selector
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
