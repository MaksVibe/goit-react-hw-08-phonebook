import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <header>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
    </header>
  );
};

export default AuthNav;
