import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="w-full md:w-4/6 rounded-t-md flex flex-col md:flex-row">
      <Link to="#">
        <img src={Logo} alt="" />
      </Link>
      <span>
        Made with Love and Passion <b>ALX Software Engineering</b>.
        <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
