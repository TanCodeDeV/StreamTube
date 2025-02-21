import React from "react";

const Button = ({ name }) => {
  return (
    <div className="m-2 ">
      <button className="h-[32px] w-full m-2 bg-gray-200 rounded-md hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
