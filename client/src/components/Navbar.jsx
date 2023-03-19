import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-50 shadow-md w-full mb-5">
      <div className="w-full inline-flex items-center justify-around">
        <div className="logo w-2/6">
          <img src={Logo} alt="Express" className="w-24 h-24 object-cover" />
        </div>
        <div className="inline-flex w-3/6 justify-end">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
