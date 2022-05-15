import React from "react";
import { Link } from "react-router-dom";

const Header = ({ text }) => (
  <Link className="btn btn-warning text-decoration-none" to="/">
    {text}
  </Link>
);

export default Header;
