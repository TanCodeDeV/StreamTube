import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { data, useSearchParams } from "react-router";
import { YT_VIDEOES_COMMENTS, suggestion_API_YT } from "../utils/Constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const searchYTVideo = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu());
    //getYTComments();
  }, []);

  // const [comments, setComments] = useState([]);
  // const getYTComments = async () => {
  //   const video = await fetch(YT_VIDEOES_COMMENTS);
  //   const data = await video.json();
  //   console.log("comments");
  //   console.log(data);
  //   setComments(data?.items || []);
  // };

  return (
    <div className="w-full flex">
      <div className="px-5 w-full">
        <iframe
          width="932"
          height="524"
          src={"https://www.youtube.com/embed/" + searchYTVideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <CommentsContainer></CommentsContainer>
        </div>
        {/* <div>
        <div className="p-2 m-2">
          <h1 className="font-bold text-2xl">{comments.length} Comments</h1>
          {comments.map((comment) => (
            <li className="p-1 m-1">
              {comment.snippet.topLevelComment.snippet.textDisplay}
            </li>
          ))}
        </div>
      </div> */}
      </div>
      <div className=" w-full mx-5 font-bold">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
