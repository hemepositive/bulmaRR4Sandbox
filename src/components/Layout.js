import React from "react";
import NavBar from "./NavBar";
import Router from "../Router";

export default class Layout extends React.Component {
  state = {
    user: false,
    activeMenu: false,
    color: "#DC143C"
  };
  // toggle burger menu
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };
  // toggle state.activeMenu only if true so clicks in content do not trigger menu opening
  divToggleMenu = () => {
    if (this.state.activeMenu) {
      this.setState({
        activeMenu: !this.state.activeMenu
      });
    }
  };

  toggleUser = () => {
    this.setState({ user: !this.state.user });
    console.log("user: ", this.state.user);
  };
  render() {
    return (
      <div>
        <NavBar
          activeMenu={this.state.activeMenu}
          toggleMenu={this.toggleMenu}
          toggleUser={this.toggleUser}
          color={this.state.color}
          user={this.state.user}
        />
        {/* divToggleMenu wraps Router for closing menu from click on content section */}
        <div onClick={this.divToggleMenu}>
          <Router />
        </div>
      </div>
    );
  }
}
