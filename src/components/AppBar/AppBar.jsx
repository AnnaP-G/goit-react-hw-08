import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <header>
      <div>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </div>
    </header>
  );
};

export default AppBar;
