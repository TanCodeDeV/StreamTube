import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex p-2 m-2">
      <SideBar></SideBar>
      <Outlet />
    </div>
  );
};

export default Body;
