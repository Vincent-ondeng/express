import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginResponse, setLogginResponse] = useState("");
  const [loggingIn, setLoggingInStatus] = useState(false);
  const [isInValid, setIsInValid] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    setLoggingInStatus(true);
    setIsInValid(false);
    event.preventDefault();
    const userLogin = {
      email,
      password,
    };
    fetch("https://express-api-o02g.onrender.com/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    })
      .then((res) => {
        if (res.status === 403) setIsInValid(true);
        return res.json();
      })
      .then((data) => {
        setLoggingInStatus(false);
        setLogginResponse(data);
        localStorage.setItem("token", JSON.stringify(loginResponse.token));
        localStorage.setItem(
          "user",
          JSON.stringify(loginResponse.userDets.User)
        );
        localStorage.setItem(
          "id",
          JSON.stringify(loginResponse.userDets.User.id)
        );
        localStorage.setItem(
          "username",
          JSON.stringify(loginResponse.userDets.User.username)
        );
        localStorage.setItem(
          "imgURL",
          JSON.stringify(loginResponse.userDets.User.imgURL)
        );
        localStorage.setItem(
          "bio",
          JSON.stringify(loginResponse.userDets.User.bio)
        );

        navigate("/user/me");
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center p-2 md:p-4">
        <form
          onSubmit={handleLogin}
          className="w-full md:w-4/6 flex flex-col p-5 bg-slate-50 shadow-lg rounded-md items-center"
        >
          <h1 className="text-3xl underline my-3 md:text-4xl font-semibold">
            Login
          </h1>
          {isInValid && (
            <span className="text-red-400 text-lg font-semibold my-2">
              Incorrect email or password
            </span>
          )}
          <label className="text-gray-700 md:w-5/6 text-lg text-left inline-flex items-center justify-start w-full md:py-2">
            Email:
          </label>
          <input
            required
            type="email"
            placeholder="email"
            className="w-full md:w-5/6 border-2 rounded-md mb-2 p-3 md:p-4 text-lg  border-slate-500 bg-transparent"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="text-gray-700 md:w-5/6 text-lg mt-2 text-left inline-flex items-center justify-start w-full md:py-2">
            Password:
          </label>
          <input
            required
            type="password"
            placeholder="password"
            className="w-full md:w-5/6 border-2 rounded-md mb-2 p-3 md:p-4  border-slate-500 bg-transparent"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* <p>This is an error!</p> */}
          <span className="text-center mb-5 mt-2">
            Don't have an account?
            <Link to="/register" className="text-blue-400 mx-2 font-semibold">
              Register
            </Link>
          </span>
          <button
            type="submit"
            className="bg-blue-400 py-3 px-4 md:w-2/6 w-3/6 rounded-md text-lg active:bg-blue-500 hover:border-2 hover:border-blue-500 hover:bg-transparent hover:font-semibold transition-all"
          >
            {loggingIn ? (
              <span className="font-semibold">Logging In...</span>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
