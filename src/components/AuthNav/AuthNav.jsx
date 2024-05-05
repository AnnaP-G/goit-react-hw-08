import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const addNavLinkActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const AuthNav = () => {
  return (
    <div className={`${css.navigation} ${css.link}`}>
      <NavLink
        className={`${addNavLinkActiveClass} ${css.navLink}`}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={`${addNavLinkActiveClass} ${css.navLink}`}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
