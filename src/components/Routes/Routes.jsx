import React from "react";
import authSelectors from "../../redux/authorization/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

const RoutesNav = () => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLogedIn ? <UserNav /> : <AuthNav />;
};

export default RoutesNav;
