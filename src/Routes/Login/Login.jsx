import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../../firebase/firebase.config";



const Login = () => {
    
    const auth = getAuth(app)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        setSuccess('')
        const target = e.target
        const email = target.email.value
        const password = target.password.value
        console.log(email, password)
        if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
            setError('Please add minimum 8 characters, number, spacial characters')
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Login successful in firebase')
            })
            .catch(err => {
                setError(err.message)
                console.log(err.message)
            })
        setSuccess('You are successfully Logged in')

    }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8">Login Here</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
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
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="text-red-500 text-lg">{error}</p>
        <p className="text-success text-lg">{success}</p>
      </div>
    </div>
  );
};

export default Login;
