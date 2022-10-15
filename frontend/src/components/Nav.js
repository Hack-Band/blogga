import React from "react";
import logo from "../assets/logo.svg";
import {Link} from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="flex">
     <Link to='/'>
     <div>
        <img src={logo} alt="logo" />
      </div>
     </Link>
      <button className="sub-btn">Subscribe</button>
    </nav>
  );
};

export default Nav;
