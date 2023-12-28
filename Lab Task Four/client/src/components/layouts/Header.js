import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Headerstyle.css";
import logoImage from "../../img/logon.jpg";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div id="navbar">
        <div id="logo">
          <img src={logoImage} alt="MyOnlineMeal.com" />
        </div>
        <ul>
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/Services">Services</Link>
          </li>
          <li className="item">
            <Link to="/About">About us</Link>
          </li>
          <li class="item">
            <a href="#contact-section">Contact us</a>
          </li>
          <li className="item login">
            <Link to="/Login">Login</Link>
          </li>
          <li className="item signup">
            <Link to="/Signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
