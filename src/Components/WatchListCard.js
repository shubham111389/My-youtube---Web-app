import React from "react";
import verified from "../assets/img/verified.png";

const WatchListCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="h-30 py-4 w-full hover:shadow-lg  rounded-lg flex hover:animate-pulse  bg-red-100  ">
      <img
        className="rounded-lg h-28 w-52"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="mx-2">
        <h1 className="font-bold  text-sm">
          {title.length > 40 ? title.substr(0, 40) + "..." : title}
        </h1>
        <div className="flex">
          <span className="">{channelTitle}</span>
          <img className="w-3 h-3 my-2 mx-1" alt="verified" src={verified} />
        </div>
        <h2 className="text-sm">
          {Number(statistics.viewCount).toLocaleString("en-US")} Views •
        </h2>
      </div>
    </div>
  );
};

export default WatchListCard;