import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="p-2">
      {comments.map((comment,index) => (
        <Comment data={comment} key={index} />
      ))}
    </div>
  );
};

export default CommentsList;