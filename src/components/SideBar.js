import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //console.log("is menu sidebar: " + isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="bg-transparent shadow-md h-full">
      <div className="m-2 p-2">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <div className="m-2 p-2">
        <h1 className="font-bold">You ></h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
      </div>
      <div className="m-2 p-2">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Tranding</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion % Beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
