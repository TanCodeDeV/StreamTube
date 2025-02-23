import React from "react";
import { USERLOGOURL } from "../utils/Constants";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg">
      <img
        className="h-[50px] w-auto p-2"
        src={USERLOGOURL}
        alt="user-icon"
      ></img>
      <div className=" flex">
        <h1 className="mx-2 font-semibold">@{name}</h1>
        <h3 className="font-normal">{text}</h3>
      </div>
    </div>
  );
};

export default ChatMessage;
