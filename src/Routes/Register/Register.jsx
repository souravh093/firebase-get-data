import React, { useState } from "react";

const Register = () => {
//   const [email, setEmail] = useState('')
  const handleEmailChange = (event) => {
    //   console.log(event.target.value);
    //   setEmail(event.target.value)
  };
  
  const handlePasswordBlur = (event) => {
    //   console.log(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const email = event.target.email.value
      const password = event.target.password.value
      console.log(email, password)
    };

  return (
    <div className="bg-green-300 p-10 rounded-md">
      <h2 className="text-4xl font-bold mb-5 text-white">Register Now</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
        //   onChange={handleEmailChange}
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <input
        //   onBlur={handlePasswordBlur}
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <input
          className="bg-green-600 text-white py-2 rounded-lg"
          type="Submit"
        //   value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
