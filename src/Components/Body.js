import React from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
  
    <div className="flex ">
      <div className="w-52 shadow-lg border-0 m-2  border-red-100">
 
     <SideBar />
     </div>

     <div className="px-2 overflow-y-hidden">
  
     <Outlet />
     </div>
      </div>
   
  );
};

export default Body;