import React from "react";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="flex col-span-1 py-3">
        <img
          src={menu}
          className="h-10 cursor-pointer py-2 px-5"
          alt="menu-icon"
          onClick={() => toggleMenuHandler()}
        />
        <img src={logo} className="h-10 " alt="logo-icon" />
      </div>
      <div className="col-span-10 px-10 justify-center py-2  ">
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full"> 🔍</button>
      </div>
      <div>
        <div className="py-3">
          <img src={user} className="h-8 " alt="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;