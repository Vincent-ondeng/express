import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="w-full md:w-4/6 rounded-t-md flex flex-col md:flex-row items-center justify-between bg-[#a4e2fab2] px-4 pt-2">
      <Link to="/">
        <img src={Logo} alt="" className="w-20 h-20 rounded-sm" />
      </Link>
      <span>
        Made with Love and Passion <b>ALX Software Engineering</b>.
        <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
