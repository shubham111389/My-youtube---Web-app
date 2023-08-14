
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";

const Header = () => {
  return (
    <div className="grid grid-flow-col shadow-lg p-2">
    <div className="flex col-span-1">
      <img
        src={menu}
        className="h-10 py-2 px-1"
        alt="menu-icon"
       
      />
      <img src={logo} className="h-10" alt="logo-icon p-3" />
    </div>
    <div className="col-span-10 px-10 " >
      <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full" />
      <button className="border border-gray-400 px-5 py-2 rounded-r-full"> 🔍 </button>
    </div>
    <div className="col-span-1">
      <div>
        <img src={user} className="h-10" alt="user-icon" />
      </div>
    </div>
  </div>
);
};

export default Header;