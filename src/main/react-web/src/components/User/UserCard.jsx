import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import Rating from "../Rating/MovieRating";
import StateContext from "../../store/Contexts";

/**
 * This Component is the container for the user authentication functionality
 */

function UserCard() {
  const Logout = React.lazy(() => import("./Logout"));
  const { state } = useContext(StateContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showRating, setShowRating] = useState(false);

  if (state.user.username) {
    return <Logout />;
  }
  return (
    <div className="justify-content-end">
      <Button variant="light" onClick={() => setShowRating(true)}>
        Rate
      </Button>
      <Rating show={showRating} handleClose={() => setShowRating(false)} />
      <Button variant="light" onClick={() => setShowLogin(true)}>
        Login
      </Button>
      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
      <Button variant="light" onClick={() => setShowRegister(true)}>
        Register
      </Button>
      <Register
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
    </div>
  );
}

export default UserCard;
