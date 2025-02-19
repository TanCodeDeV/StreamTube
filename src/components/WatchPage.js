import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const searchYTVideo = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="932"
        height="524"
        src={"https://www.youtube.com/embed/" + searchYTVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
