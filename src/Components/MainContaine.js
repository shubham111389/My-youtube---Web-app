import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="px-3 py-4 shadow-md ">
      <ButtonList />
     <div className="py-10 h-[100vh] overflow-auto">
      <VideoContainer />
      </div>
      </div>
  
  );
};
    


export default MainContainer;