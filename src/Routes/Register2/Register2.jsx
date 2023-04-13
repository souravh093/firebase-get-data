import React from "react";

const Register2 = () => {
    const handleRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
    }
  return (
    <div className="bg-green-300 p-10 rounded-md">
      <h2 className="text-4xl font-bold mb-5 text-white">Please Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          //   onChange={handleEmailChange}
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <input
          className="outline-green-500 border px-3 py-2 border-green-500"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <div className="flex gap-2">
          <input
            className="flex flex-start w-5"
            type="checkbox"
            name=""
            id=""
          />
          <label htmlFor="">Accept Terms and Condition</label>
        </div>
        <input
          className="bg-green-600 text-white py-2 rounded-lg"
          type="Submit"
        />
      </form>
    </div>
  );
};

export default Register2;
