import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <nav className=" shadow-md w-full mb-5 capitalize sticky top-0 backdrop-blur-md">
      <div className="w-full inline-flex items-center justify-around text-lg">
        <div className="logo w-2/6">
          <Link to="/">
            <img src={Logo} alt="Express" className="w-20 h-20 object-cover" />
          </Link>
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
        {user && (
          <div>
            {" "}
            <Link
              to="/user/write"
              className="bg-blue-400 py-3 px-4 mx-4 text-lg rounded-md active:bg-blue-500 transition-all text-white font-semibold"
            >
              Write
            </Link>
            <button
              onClick={handleLogout}
              className="border-2 border-blue-400 py-2 px-4 rounded-md"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
