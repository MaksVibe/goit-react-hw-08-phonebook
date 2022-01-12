import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import AuthNav from "./components/AuthNav/AuthNav";
import LoginView from "./components/Login/Login";
import UserNav from "./components/UserNav/UserNav";
import authSelectors from "./redux/authorization/auth-selectors";
import { useSelector } from "react-redux";

function App() {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className="App">
      <Suspense fallback={"...loading"}>
        {isLogedIn ? <UserNav /> : <AuthNav />}
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
