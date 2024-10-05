import React from "react";
import { links } from "../consts";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log(links);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">To Do App</div>
        <ul className="flex space-x-4">
          {/* Not going to hardcode the links */}
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className="text-white text-[20px]">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
