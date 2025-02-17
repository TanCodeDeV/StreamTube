import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex p-2 m-2">
      <SideBar></SideBar>
      <MainContainer></MainContainer>
    </div>
  );
};

export default Body;
