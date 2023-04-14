import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  //   const [email, setEmail] = useState('')
  const handleEmailChange = (event) => {
    //   console.log(event.target.value);
    //   setEmail(event.target.value)
  };

  const handlePasswordBlur = (event) => {
    //   console.log(event.target.value)
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    console.log(name, email, password);

    if (
      !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        "Please add Minimum eight characters, at least one letter, one number and one special character"
      );
      return;
    }

    // Create user for fireBase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(result);
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("Successfully Registered");
        sendVerificationsEmail(loggedUser);
        updateUserDAta(loggedUser, name)
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const sendVerificationsEmail = (user) => {
    sendEmailVerification(user).then((result) => {
      console.log(result);
      alert("Please verify your email");
    });
  };

  const updateUserDAta = (user, name) => {
    updateProfile(user, {
      displayName: name,
    }).then(() => {
      console.log('user name updated')
    })
    .catch(err => {
      setError(err.message);
    })
  };

  return (
    <div className="bg-green-300 p-10 rounded-md">
      <h2 className="text-4xl font-bold mb-5 text-white">Register Now</h2>
      <h3 className="text-bold text-sky-600 text-xl">{success}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          //   onChange={handleEmailChange}
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          //   onChange={handleEmailChange}
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <input
          //   onBlur={handlePasswordBlur}
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          required
        />
        <input
          className="bg-green-600 text-white py-2 rounded-lg"
          type="Submit"
          //   value="Register"
        />
      </form>
      <p className="mt-3">
        <small>
          Already have an account? Please{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </small>
      </p>
      <p className="text-red-500 mt-3">{error}</p>
    </div>
  );
};

export default Register;
