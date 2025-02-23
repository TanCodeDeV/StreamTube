import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/Store";
import { addMessage } from "../utils/chatSlice";
import { randomNames, randomComments } from "../utils/helper";

const LiveChat = () => {
  const chatMessage = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: randomNames(),
          text: randomComments(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="w-full flex flex-col-reverse border h-[524px] border-black rounded bg-gray-100 overflow-scroll">
      {chatMessage.map((message, index) => (
        <ChatMessage key={index} name={message.name} text={message.text} />
      ))}
    </div>
  );
};

export default LiveChat;
