import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={css.container}>
      <p className={css.userName}>Hello, {userData.name}</p>
      <button className={css.btnLogout} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
