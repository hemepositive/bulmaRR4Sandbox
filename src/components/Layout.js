import React from "react";
import NavBar from "./NavBar";
import Closer from "./Closer";
import Router from "../Router";

export default class Layout extends React.Component {
  state = {
    activeMenu: false,
    color: "red"
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
    console.log("menu toggle click", this.state.activeMenu);
  };
  divToggleMenu = () => {
    if (this.state.activeMenu) {
      this.setState({
        activeMenu: !this.state.activeMenu
      });
    }
  };
  render() {
    return (
      <div>
        <NavBar
          activeMenu={this.state.activeMenu}
          toggleMenu={this.toggleMenu}
          color={this.state.color}
        />

        <Router divToggleMenu={this.divToggleMenu} />

        <Closer className="is-large" toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}
