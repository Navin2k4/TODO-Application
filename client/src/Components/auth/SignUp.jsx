import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill all the form fields");
    }

    
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-gray-200 shadow-lg rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 p-8">
          <h2 className="text-3xl text-center text-gray-800 font-bold">
            Sign Up
          </h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleOnChange}
              placeholder="Enter your full name"
              className="rounded-md p-3 transition duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              onChange={handleOnChange}
              id="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-md p-3 transition duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              onChange={handleOnChange}
              id="password"
              name="password"
              placeholder="Create a password"
              className="rounded-md p-3 transition duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className="font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={handleOnChange}
              name="confirmPassword"
              placeholder="Confirm your password"
              className="rounded-md p-3 transition duration-200"
            />
          </div>

          {errorMessage ? <p>{errorMessage}</p> : ""}

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-orange-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
