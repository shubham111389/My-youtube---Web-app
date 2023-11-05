import React from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
  
    <div className="flex  py-20">
      <div className=" shadow-lg border-1 m-2  border-red-200">
 
     <SideBar />
     </div>

     <div className="px-2 overflow-y-hidden">
  
     <Outlet />
     </div>
      </div>
   
  );
};

export default Body;