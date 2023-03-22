import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const supabaseURL = process.env.REACT_APP_SUPABASE_URL;
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdError, setPWDError] = useState(false);
  const [registering, setRegistrationStatus] = useState(false);
  const navigate = useNavigate();
  const defaultIMG = `${supabaseURL}/storage/v1/object/public/images/users/116880072.png`;
  const handleRegister = (event) => {
    setRegistrationStatus(true);
    event.preventDefault();
    const userRegister = {
      username,
      defaultIMG,
      email,
      password,
    };
    if (password.length >= 8) {
      setPWDError(false);
      fetch("http://localhost:5500/users/new", {
        method: "POST",
        body: JSON.stringify(userRegister),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then(() => {
          navigate("/login");
          setRegistrationStatus(false);
        })
        .catch((error) => {
          setRegistrationStatus(false);
          console.error("There was a problem with the fetch operation:", error);
        });
    } else {
      setPWDError(true);
      setRegistrationStatus(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 p-2">
        <form
          onSubmit={handleRegister}
          className="w-full md:w-4/6 flex flex-col p-5  bg-slate-50 shadow-lg rounded-md items-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold underline my-5">
            Register
          </h1>

          <label className="text-gray-700 md:w-5/6 text-lg text-left  mt-2 inline-flex items-center justify-start w-full md:py-2">
            What should we call you?
          </label>
          <input
            required
            type="text"
            placeholder="e.g chuckie"
            className="w-full md:w-5/6 border-2 mb-4 p-3 md:p-4 rounded-md text-lg  border-slate-500 bg-transparent"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <label className="text-gray-700 md:w-5/6 text-lg text-left inline-flex items-center justify-start w-full md:py-2">
            Your email
          </label>
          <input
            required
            type="email"
            placeholder="name@email.com"
            className="w-full md:w-5/6 border-2 mb-4 p-3 md:p-4 rounded-md text-lg  border-slate-500 bg-transparent"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="text-gray-700 md:w-5/6 text-lg text-left inline-flex items-center justify-start w-full md:py-2">
            Your password:
          </label>
          <input
            required
            type="password"
            placeholder="supersecretpassword"
            className="w-full md:w-5/6 border-2 rounded-md mb-2 p-3 md:p-4  border-slate-500 bg-transparent"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {pwdError && (
            <span className="text-red-400 capitalize">
              password should be longer than 8 charaters
            </span>
          )}
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
            {registering ? <span>Registering...</span> : <span>Register</span>}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
