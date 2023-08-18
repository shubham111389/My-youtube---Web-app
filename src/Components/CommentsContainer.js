import React from "react";
import CommentsList from "./CommentsList";


const CommentsContainer = () => {
  const commentsData = [
    {
      name: "shubham",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "shubham",
          text: "Comment Goes Here!",
          replies: [
            {
              name: "shubham",
              text: "Comment Goes Here!",
              replies: [],
            },
            {
              name: "shubham",
              text: "Comment Goes Here!",
              replies: [
                {
                  name: "shubham",
                  text: "Comment Goes Here!",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "shubham",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "shubham",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "shubham",
          text: "Comment Goes Here!",
          replies: [],
        },
      ],
    },
    {
      name: "shubham",
      text: "Comment Goes Here!",
      replies: [
        {
          name: "shubham",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "shubham",
          text: "Comment Goes Here!",
          replies: [],
        },
        {
          name: "shubham",
          text: "Comment Goes Here!",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="m-6">
      <h1 className="text-xl font-semibold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;