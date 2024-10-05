import React from "react";
import ComponentThree from "./ComponentThree";

const ComponentTwo = () => {
  return (
    <div className="bg-gray-400 p-8 rounded-md ">
      <h1 className="text-white text-center rounded-lg">ComponentTwo</h1>
      <ComponentThree />
    </div>
  );
};

export default ComponentTwo;
