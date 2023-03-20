import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className="bg-slate-50 shadow-md w-full mb-5 capitalize">
      <div className="w-full inline-flex items-center justify-around text-lg">
        <div className="logo w-2/6">
          <img src={Logo} alt="Express" className="w-24 h-24 object-cover" />
        </div>
        {!user && (
          <div className="inline-flex w-3/6 justify-end items-center">
            <Link
              to="/login"
              className="p-3 border-2 font-semibold rounded-md mx-2 border-slate-400"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="md:block hidden p-3 border-2 border-slate-400 rounded-md bg-slate-400 mx-2"
            >
              create account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
