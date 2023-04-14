import React, { useRef, useState } from "react";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    console.log(email, password);
    if (
      !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setError("Please add minimum 8 characters, number, spacial characters");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (!loggedUser.emailVerified) {
          alert("please verify your email");
        }
        setSuccess("Login successful in firebase");
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter your email to reset password");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please check your email");
      })
      .catch((err) => {
        console.log("error", err.message);
        setError(err.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8">Login Here</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              id="email"
              type="email"
              className="border border-gray-400 p-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              className="border border-gray-400 p-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Sign In
            </button>
            <p>
              <small
                onClick={handleResetPassword}
                className="text-red-500 hover:underline cursor-pointer"
              >
                Forget Password
              </small>
            </p>
          </div>
        </form>
        <p className="mt-4">
          <small>
            New to this website? Please{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </small>
        </p>
        <p className="text-red-500 text-lg">{error}</p>
        <p className="text-success text-lg">{success}</p>
      </div>
    </div>
  );
};

export default Login;
