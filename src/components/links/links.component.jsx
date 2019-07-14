import React from "react";
import { Link } from "react-router-dom";

const Links = () => (
  <div>
    <Link to="/">
      <h1>HOME</h1>
    </Link>
    <Link to="/Portfolio">
      <h1>PORTFOLIO</h1>
    </Link>
    <Link to="/">
      <h1>CONTACT</h1>
    </Link>
  </div>
);

export default Links;
