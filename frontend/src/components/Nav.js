import React from "react";
import logo from "../assets/logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="flex">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <button className="sub-btn">Subscribe</button>
    </nav>
  );
};

export default Nav;
