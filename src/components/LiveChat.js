import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/Store";
import { addMessage } from "../utils/chatSlice";
import { randomNames, randomComments } from "../utils/helper";
import { USERLOGOURL } from "../utils/Constants";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
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
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="w-full flex flex-col-reverse h-[524px] border  border-gray-500 rounded bg-gray-100 overflow-scroll">
        {chatMessage.map((message, index) => (
          <ChatMessage key={index} name={message.name} text={message.text} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Tanmayi Bhave",
              text: liveMessage,
            })
          );
        }}
        className="w-full grid grid-cols-12 border border-gray-500 rounded bg-gray-100 border-yt-transparent"
      >
        <img
          className="h-[50px] w-auto p-2 col-span-1"
          src={USERLOGOURL}
          alt="user-icon"
        ></img>
        <input
          className="col-span-10 p-1 m-1 border border-black rounded-xl bg-gray-100"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className="col-span-1">▶️</button>
      </form>
    </div>
  );
};

export default LiveChat;
