import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import appReducer from "./store/reducers";
import StateContext from "./store/Contexts";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import UserReviewPage from "./pages/UserReviewPage";


function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: {},
  });
  const { user } = state;

  const routes = (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={"userreviews"} element={<UserReviewPage />} />

    </Routes>
  );
  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <Router>
          <Container>
            <HeaderBar />
            {routes}
          </Container>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
