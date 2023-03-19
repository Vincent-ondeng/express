import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
      <form className="w-full md:w-4/6 flex flex-col p-10 md:p-5 bg-slate-100 shadow-md rounded-md items-center">
        <h1 className="text-2xl md:text-3xl">Login</h1>
        <input
          required
          type="email"
          placeholder="email"
          className="w-full md:w-4/6 border-b-2 my-2 p-2 text-lg  border-slate-500 bg-transparent"
        />
        <input
          required
          type="password"
          placeholder="password"
          className="w-full md:w-4/6 border-b-2 my-2 p-2  border-slate-500 bg-transparent"
        />
        {/* <p>This is an error!</p> */}
        <span className="text-center mb-5 mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 font-semibold">
            Register
          </Link>
        </span>
        <button type="submit" className="bg-blue-400 py-3 px-4 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
