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

const EndNavbar = props =>
  props.user ? (
    <UserEnd toggleUser={props.toggleUser} user={props.user} />
  ) : (
    <NoUserEnd toggleUser={props.toggleUser} />
  );

const NoUserEnd = props => (
  <a className="navbar-item" onClick={props.toggleUser}>
    Sign In
  </a>
);

const UserEnd = props => (
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">User</a>
    <div class="navbar-dropdown">
      <a class="navbar-item">Account</a>
      <a class="navbar-item">Specials</a>
      <div className="navbar-divider" />
      <a class="navbar-item" onClick={props.toggleUser}>
        Sign out
      </a>
    </div>
  </div>
);

const NavBar = props => (
  <nav className="navbar has-shadow is-fixed-top">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <p style={{ color: props.color }}>mylogo</p>
      </Link>
      <NavbarBurger active={props.activeMenu} toggleMenu={props.toggleMenu} />
    </div>
    {/* MENU */}
    <div className={`navbar-menu ${props.activeMenu ? "is-active" : ""}`}>
      {/* START */}
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/meats">
          Meats
        </Link>
        <Link className="navbar-item" to="/veggies">
          Veggies
        </Link>
        {/* DROPDOWN in START */}
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Animals</a>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/cows">
              Cows
            </Link>
            <Link className="navbar-item" to="/pigs">
              Pigs
            </Link>
          </div>
        </div>
      </div>
      {/* END */}
      <div className="navbar-end">
        <EndNavbar toggleUser={props.toggleUser} user={props.user} />
      </div>
    </div>
  </nav>
);

export default NavBar;
