import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    const newValue = !this.state.isOpen;
    this.setState({
      isOpen: newValue
    });
  };

  render() {
    return (
      <div id="main-top">
        <nav className="navbar">
          <h1 className="logo">Start Bootstrap</h1>
          <ul className="navbar-list">
            <li className="navbar-list-item">Home</li>
            <li className="navbar-list-item">About</li>
            <li className="navbar-list-item">Services</li>
            <li className="navbar-list-item">Contact</li>
          </ul>
          <img
            className="hamburger"
            src="https://cdn1.iconfinder.com/data/icons/starter-mobile-app/100/mobile_button-16-512.png"
            alt="Hamburger"
            onClick={this.handleToggle}
          />

          <ul className={`sidebar-list ${this.state.isOpen ? "open" : ""}`}>
            <li className="sidebar-list-item">Home</li>
            <li className="sidebar-list-item">About</li>
            <li className="sidebar-list-item">Services</li>
            <li className="sidebar-list-item">Contact</li>
          </ul>
        </nav>
        <div className="middle">
          <div>
            <h3 className="welcome">Welcome To Our Studio!</h3>
            <h1 className="meet">IT'S NICE TO MEET YOU</h1>
            <h2 className="more">TELL ME MORE</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
