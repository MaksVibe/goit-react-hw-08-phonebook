import s from "./UserNav.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/authorization/auth-selectors";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/authorization/auth-operations";

const UserNav = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const handleLogout = (e) => {
    dispatch(logout());
  };
  return (
    <div>
      <header>
        <div className={s.UserHeader}>
          <span>Hello, {name}</span>
          <button type="button" onClick={handleLogout} className="btn">
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};

export default UserNav;
