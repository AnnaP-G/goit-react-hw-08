import { Link } from "react-router-dom";
// import { selectIsSignedIn } from "../../redux/auth/selectors";
// import { useSelector } from "react-redux";

const NotFoundPage = () => {
  // const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <div>
      {/* {isSignedIn ? <Navigate to="/contacts" replace /> : null} */}
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
