import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchForm/SearchBox";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { apiFetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import { refreshUser } from "./redux/auth/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(apiFetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        {/* <Route path="register" element={<RegistrationForm />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="login" element={<LoginForm />} /> */}
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div> */}
    </Layout>
  );
};

export default App;
