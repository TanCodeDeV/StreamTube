import React from "react";

const VideoCard = ({ info }) => {
  console.log("video card");
  console.log(info);
  const thumbnail_url = info?.snippet?.thumbnails?.default?.url;
  const title = info?.snippet?.title;
  const channelTitle = info?.snippet?.channelTitle;
  const views = info?.statistics.viewCount;
  console.log(title);
  console.log(channelTitle);
  console.log(views);
  return (
    <div className="m-2 p-2 hover:cursor-pointer">
      <div className="ml-4 mt-2">
        <img
          className="w-[300px] h-[180px] rounded-md hover:rounded-none hover:w-[305px] hover:h-[185px]"
          src={thumbnail_url}
          alt="thumbnail"
        ></img>
      </div>
      <div className="ml-4 w-[300px] h-full">
        <h1 className="font-semibold">{title}</h1>
        <h3>{channelTitle}</h3>
        <h4>{(views / 1000000).toFixed(2)}M views</h4>
      </div>
    </div>
  );
};

export default VideoCard;
