import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistrationStatus] = useState(false);

  const handleRegister = (event) => {
    setRegistrationStatus(true);
    event.preventDefault();
    const userRegister = {
      username,
      email,
      password,
    };

    fetch("http://localhost:5500/users/login", {
      method: "POST",
      body: JSON.stringify(userRegister),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-100 p-2">
      <form
        onSubmit={handleRegister}
        className="w-full md:w-4/6 flex flex-col p-5  bg-slate-50 shadow-lg rounded-md items-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold underline my-2">
          Register
        </h1>

        <label className="text-gray-700 md:w-5/6 text-lg text-left inline-flex items-center justify-start w-full md:py-2">
          Username:
        </label>
        <input
          required
          type="text"
          placeholder="unique username"
          className="w-full md:w-5/6 border-2 mb-4 p-3 md:p-4 rounded-md text-lg  border-slate-500 bg-transparent"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <label className="text-gray-700 md:w-5/6 text-lg text-left inline-flex items-center justify-start w-full md:py-2">
          Email:
        </label>
        <input
          required
          type="email"
          placeholder="random@email.com"
          className="w-full md:w-5/6 border-2 mb-4 p-3 md:p-4 rounded-md text-lg  border-slate-500 bg-transparent"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="text-gray-700 md:w-5/6 text-lg text-left inline-flex items-center justify-start w-full md:py-2">
          Password:
        </label>
        <input
          required
          type="password"
          placeholder="supersecretpassword"
          className="w-full md:w-5/6 border-2 rounded-md mb-2 p-3 md:p-4  border-slate-500 bg-transparent"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span className="text-center mb-5 mt-2">
          Already have an account?
          <Link to="/login" className="text-blue-400 font-semibold mx-2">
            Login
          </Link>
        </span>
        <button
          type="submit"
          className="bg-blue-400 py-3 px-4 w-3/6 rounded-md text-lg mb-2 active:bg-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500 transition-all"
        >
          {!registering && <span>Register</span>}
          {registering && <span>Registering...</span>}
        </button>
      </form>
    </div>
  );
};

export default Register;
