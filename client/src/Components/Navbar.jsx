import React from "react";
import { links } from "../consts/consts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">To Do App</div>
        <ul className="flex space-x-4 items-center">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="text-white">
                  {link.title}
                </Link>
              </li>
            ))}
          <Link to="/signin">
            <button className="bg-yellow-400 p-1 px-2 rounded-md">
              Sign In Now
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
