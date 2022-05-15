import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import appReducer from "./store/reducers";
import StateContext from "./store/Contexts";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: {},
  });
  const { user } = state;

  const routes = (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
  return (
    <div>
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
