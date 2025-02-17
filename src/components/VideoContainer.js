import React, { useEffect, useState } from "react";
import { YT_VIDEOES_API } from "../utils/Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const video = await fetch(YT_VIDEOES_API);
    const data = await video.json();
    setVideos(data.items);
    //console.log(data);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
