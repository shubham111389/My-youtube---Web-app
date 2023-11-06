import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import WatchListCard from "./WatchListCard";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [hideChat ,setHideChat]=useState(true);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  
  useEffect(() => {
    dispatch(closeMenu(false));
  });
  return (

    <div className="flex">
      <div className="flex flex-col ">
        <div className="mt-8  mx-6">
          <iframe
            width="1100"
            height="600"         
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg"
            
          ></iframe>
          
          
        </div>
        <CommentsContainer />
      </div>
      <div className=" py-4 ">
        <div className=" ">
          <button  className=" py-2 rounded-lg mx-36 text-xl font-bold bg-lime-200 w-36"  onClick={() => setHideChat(!hideChat)}  > LiveChat</button>
        </div>
        <div className="py-2">
          { hideChat? null : <LiveChat/>}
        </div>
        <div className="px-2  overflow-auto">
        {videoList.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <WatchListCard videoData={video} key={video.id} />
          </Link>
        ))}
        </div>
      </div>
        
    </div>
  );
};
export default WatchVideo;