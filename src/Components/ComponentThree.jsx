import React from "react";
import ComponentFour from "./componentFour";

const ComponentThree = () => {
  return (
    <div className="bg-gray-300 p-8 rounded-md ">
      <h1 className="text-white rounded-t-lg text-center" >ComponentThree</h1>
      <ComponentFour />
    </div>
  );
};

export default ComponentThree;
