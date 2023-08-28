import React from "react";
import user from "../assets/img/user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex bg-gray-50 my-2 rounded-md ">
      <img src={user} className="h-6 px-1" />
      <span className="mx-1 font-bold px-2">{name}</span>
      <span className="mx-1">{message} 🚀</span>
    </div>
  );
};

export default ChatMessage;