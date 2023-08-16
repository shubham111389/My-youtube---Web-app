import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
    <div className="grid-cols-11">
      <ButtonList />
      <VideoContainer />
    </div>
    </div>
  );
};
    


export default MainContainer;