import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleDropDown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <nav className=" shadow-md w-full capitalize sticky top-0 backdrop-blur-md mb-10">
        <div className="w-full inline-flex items-center justify-around text-lg">
          <div className="logo w-2/6">
            <Link to="/">
              <img
                src={Logo}
                alt="Express"
                className="w-20 h-20 object-cover"
              />
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
            <div className="flex flex-row items-center justify-end w-3/6">
              <Link to="/user/me" className="px-4 hidden md:block">
                Account
              </Link>
              <button onClick={handleDropDown} className="md:hidden">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <Link
                to="/user/write"
                className=" px-4 text-lg rounded-md active:bg-blue-500 hidden md:block"
              >
                Write
              </Link>
              <button
                onClick={handleLogout}
                className="border-2 border-blue-400 py-2 px-4 ml-1 hidden md:block rounded-md transition-all hover:bg-blue-400"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
      {dropdown && (
        <div className="sticky top-20 w-full backdrop-blur-md p-5 flex flex-col md:hidden items-center shadow-lg">
          <Link to="/" className="my-4 text-xl font-semibold underline">
            Home
          </Link>
          <Link to="/user/me" className=" text-xl font-semibold underline">
            Account
          </Link>
          <div className="inline-flex items-center justify-center w-full my-4">
            <Link
              to="/user/write"
              className="bg-blue-400 py-2 px-4 mx-4 text-lg rounded-md active:bg-blue-500 transition-all text-white font-semibold"
            >
              Write
            </Link>
            <button
              onClick={handleLogout}
              className="border-2 border-blue-400 py-2 px-4 mx-4 rounded-md"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
