import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  // Used to navigate to another page from the front end after api request call
  const navigate = useNavigate();

  // Collect all the data from  the form field
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  console.log(formData);

  /**
   * This function is used to make the frontend validation and then call tha api for
   * further data processing in the backend then navigate to the signin page
   */
  const handleSubmit = async (e) => {
    // this function prevents the formdata not to be cleared
    e.preventDefault();
    // frontend validation to check all the fields
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setErrorMessage("All fields are required");
    }
    // frontend validation to check the password mismatch
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Password dosen't match");
    }
    // try to call the backend and make the api call
    try {
      // try to concole log the response to see what it carries
      // this function is similar to that we did using the postman
      const response = await fetch("api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });
      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        setErrorMessage(null);
        // navigate to the signin page
        navigate("/signin");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      return setErrorMessage("An error occoured during submission");
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
            <label htmlFor="username" className="font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
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

          {errorMessage ? <p className="text-red-400">{errorMessage}</p> : ""}

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
