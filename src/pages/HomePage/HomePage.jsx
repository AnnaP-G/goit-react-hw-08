import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>Welcome to your contacts manager! </h1>
    </>
  );
};

export default HomePage;
