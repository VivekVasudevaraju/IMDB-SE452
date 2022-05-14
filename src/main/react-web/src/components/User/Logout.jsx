import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import StateContext from "../../store/Contexts";

function Logout() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const navigation = useNavigation();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
      }}
    >
      Logged in as: <b>{user.username}</b>
      <Link to="/">
        <input className="tab" type="submit" value="Logout" />
      </Link>
    </form>
  );
}

export default Logout;
