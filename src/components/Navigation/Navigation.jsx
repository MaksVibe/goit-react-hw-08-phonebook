import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <div className="container">
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Register
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Contacts
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
