import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <header className={css.header}>
      <div className={`${css.container} ${css.headerContainer}`}>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
