import React from "react";
import { Link } from "react-router-dom";

const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
);

const NavBar = props => (
  <nav className={`navbar is-fixed-top is-${props.color}`}>
    <div className="navbar-brand">
      <Link to="/" className="navbar-item is-capitalized">
        mylogo
      </Link>
      <NavbarBurger active={props.activeMenu} toggleMenu={props.toggleMenu} />
    </div>
    <div className={`navbar-menu ${props.activeMenu ? "is-active" : ""}`}>
      <div className="navbar-start">
        <Link className="navbar-item is-capitalized" to="/">
          Home
        </Link>
        <Link className="navbar-item is-capitalized" to="/meats">
          Meats
        </Link>
        <Link className="navbar-item is-capitalized" to="/veggies">
          Veggies
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
