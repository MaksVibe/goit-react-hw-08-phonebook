import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/authorization/auth-selectors";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/authorization/auth-operations";

const UserNav = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const handleLogout = (e) => {
    e.preventDeafault();
    dispatch(logout());
  };
  return (
    <div>
      <header>
        <span>Hello, {name}</span>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
};

export default UserNav;
