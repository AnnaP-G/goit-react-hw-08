import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsSignedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <header>
      <div>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
