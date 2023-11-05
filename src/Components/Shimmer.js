import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap ">
      {Array(50)
        .fill("")
        .map((index) => (
          <div
            className="bg-gray-200 animate-pulse border border-gray-300 p-2 m-2 w-[325px] h-[19rem] rounded-2xl shadow-lg"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;