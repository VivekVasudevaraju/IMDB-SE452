import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useOktaAuth } from "@okta/okta-react";

/**
 * This Component is the container for the user authentication functionality
 */

function UserCard() {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();
  const handleLogin = async () => history.push("/login");
  const handleLogout = async () => oktaAuth.signOut();

  if (!authState) {
    return <div>Loading authentication...</div>;
  } else if (!authState.isAuthenticated) {
    return (
      <div>
        <a variant="dark" onClick={handleLogin}>
          Login
        </a>
      </div>
    );
  } else {
    return (
      <div className="justify-content-end">
        <a variant="dark" onClick={handleLogout}>
          Logout
        </a>
      </div>
    );
  }
}

export default UserCard;
