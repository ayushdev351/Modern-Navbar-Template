import React, { useState } from "react";
import Button from "./Button.js";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo"></Link>
      </nav>
    </>
  );
}

export default Navbar;
