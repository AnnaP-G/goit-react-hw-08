import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const addNavLinkActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={addNavLinkActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={addNavLinkActiveClass} to="/register">
        Register
      </NavLink>
      <NavLink className={addNavLinkActiveClass} to="/login">
        Login
      </NavLink>
      <NavLink className={addNavLinkActiveClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
