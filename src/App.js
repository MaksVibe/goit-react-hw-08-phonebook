import "./App.css";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import AuthNav from "./components/AuthNav/AuthNav";
import LoginView from "./components/Login/Login";
import UserNav from "./components/UserNav/UserNav";
import authSelectors from "./redux/authorization/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/authorization/auth-operations";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import RoutesNav from "./components/Routes/Routes";

function App() {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={"...loading"}>
        <RoutesNav />
        {!isLogedIn ? (
          <Routes>
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<Registration />} />
          </Routes>
        ) : (
          <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
