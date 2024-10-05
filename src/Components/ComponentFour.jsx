import React, { useContext } from "react";
import { ThemeContext } from "../Pages/Home";

const ComponentFour = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const textStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <div className='bg-gray-200 p-8 rounded-md '>
      <h1 style={textStyle} className="p-2 rounded-t-md text-center">Componentfour</h1>
    </div>
  );
};

export default ComponentFour;
