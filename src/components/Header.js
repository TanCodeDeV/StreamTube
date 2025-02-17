import React from "react";
import { HAMICONURL, YTLOGOURL, USERLOGOURL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between h-[70px] shadow-md">
      <div className="flex">
        <img
          className="h-[60px] w-auto p-2 m-1 hover:cursor-pointer"
          src={HAMICONURL}
          alt="menu"
          onClick={toggleSideBar}
        ></img>
        <img
          className="h-[60px] w-auto p-2 m-1"
          src={YTLOGOURL}
          alt="yt-logo"
        ></img>
      </div>
      <div>
        <input
          className=" mt-3 p-2 w-[35rem] border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        ></input>
        <button className="p-2 border border-gray-400 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-[60px] w-auto m-1 p-2"
          src={USERLOGOURL}
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;
