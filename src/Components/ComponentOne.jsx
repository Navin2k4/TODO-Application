import React from "react";
import ComponentTwo from "./ComponentTwo";

const ComponentOne = () => {
  return (
    <div className="bg-gray-600 p-8 rounded-md ">
      <h1 className="text-white rounded-t-lg text-center">ComponentOne</h1>
      <ComponentTwo />
    </div>
  );
};

export default ComponentOne;
