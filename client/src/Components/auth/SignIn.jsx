import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  console.log(formData);

  const handleSubmit = () => {};

  return (
    <div className="max-w-md mx-auto mt-20 bg-gray-200 shadow-lg rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 p-8">
          <h2 className="text-3xl text-center text-gray-800 font-bold">
            Sign In
          </h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleOnChange}
              name="email"
              placeholder="Enter your email"
              className="border border-gray-300  rounded-md p-2 transition duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleOnChange}
              name="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200"
          >
            <Link to="/signin">Sign In</Link>
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
