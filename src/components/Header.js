import React from "react";
import { Link } from "react-router-dom";

// const pages = ["about", "contact", "sitemap"];

// const NavbarItem = props => (
//   <a className="navbar-item is-capitalized" href={`#${props.page}`}>
//     {props.page}
//   </a>
// );

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

class Header extends React.Component {
  state = {
    activeMenu: false,
    color: "red"
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };
  render() {
    // let { pages = [], color } = this.props;
    // let navbarItems = pages.map(page => (
    //   <NavbarItem page={page} key={page} color={color} />
    // ));
    return (
      <nav className={`navbar is-fixed-top is-${this.state.color}`}>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-capitalized">
            mylogo
          </Link>
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}
        >
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
  }
}

export default Header;
