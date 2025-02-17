import React from "react";
import Button from "./Button";
import { buttonList } from "../utils/Constants";

const ButtonsList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-2 hide-scrollbar">
      {buttonList.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonsList;
