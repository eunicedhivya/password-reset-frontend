import "./App.css";
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import AuthContext from "./context/AuthContextProvider";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccActivated from "./pages/AccActivated";

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <ToastContainer autoClose={4000} />
      <Header />
      {/* <NavBar /> */}
      <Switch>
        {!loggedIn ? (
          <>
            <Route path="/" exact>
              <ForgotPassword />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/password-reset">
              <PasswordReset />
            </Route>
            <Route path="/password-reset/:userId/:token">
              <PasswordReset />
            </Route>
            <Route path="/account-activated">
              <AccActivated />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
            <Route path="/dashboard">
              <Profile />
            </Route>
          </>
        )}
        <Route path="**">
          <div>Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
