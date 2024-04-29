import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const addNavLinkActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={addNavLinkActiveClass} to="/">
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink className={addNavLinkActiveClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
