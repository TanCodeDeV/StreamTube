import React from "react";
import { commentsData, USERLOGOURL } from "../utils/Constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex m-2 p-1 shadow-sm bg-gray-100 rounded-lg">
      <img
        className="h-[60px] w-auto p-2"
        src={USERLOGOURL}
        alt="user-icon"
      ></img>
      <div className="mt-2">
        <p className="font-bold">@{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-8 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
