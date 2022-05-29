import React, { useReducer } from "react";
import "./App.css";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Container } from "react-bootstrap";
import appReducer from "./store/reducers";
import StateContext from "./store/Contexts";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import Login from "./components/User/Login";
import UserReviewPage from "./pages/UserReviewPage";
import config from "./config";

const oktaAuth = new OktaAuth(config.oidc);

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      zipcode: "",
      state: "",
      city: "",
      phoneNumber: "",
    },
  });
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "", window.location.origin));
  };

  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <Container>
            <HeaderBar />
            <Route path="/" exact component={HomePage} />
            <SecureRoute path="/booking" component={Booking} />
            <Route path="/userreviews" component={UserReviewPage} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/login/callback" component={LoginCallback} />
          </Container>
        </Security>
      </StateContext.Provider>
    </div>
  );
}

export default App;
