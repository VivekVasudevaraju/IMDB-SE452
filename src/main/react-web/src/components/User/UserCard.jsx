import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useOktaAuth } from "@okta/okta-react";
import Rating from "../Rating/MovieRating";

/**
 * This Component is the container for the user authentication functionality
 */

function UserCard() {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();
  const handleLogin = async () => history.push("/login");
  const handleLogout = async () => oktaAuth.signOut();

  const [showRating, setShowRating] = useState(false);

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <Button variant="dark" onClick={handleLogin}>
          Login
        </Button>
      </div>
    );
  } else {
    return (
      <div className="justify-content-end">
        <Button variant="dark" onClick={() => setShowRating(true)}>
          Rate
        </Button>
        <Rating show={showRating} handleClose={() => setShowRating(false)} />
        <Button variant="dark" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default UserCard;
