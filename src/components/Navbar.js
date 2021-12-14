import React, { useState } from "react";
import Button from "./Button.js";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState("false");
  const [dropdown, setDropdown] = useState("false");

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick("false");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Epic
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/servives"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
