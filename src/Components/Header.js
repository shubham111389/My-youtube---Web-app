import React from "react";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { cacheResults } from "../utils/searchSlice";




const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };


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
        <a>
        <img src={logo} className="h-10 " alt="logo-icon" />
        </a>
      </div>
      <div className="col-span-10 px-10 justify-center py-2  ">
        <input
         type="text" 
         className="w-1/2 border border-gray-400 p-2 rounded-l-full text-slate-950" 
         value={setSearchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full"> 🔍</button>
        <div className="bg-white px-5 w-96 shadow-lg rounded-lg absolute">
          {
            <ul>
              {suggestions.map((item) => (
                <li className="px-1 py-2 hover:bg-gray-100" key={item}>
                  🔍{item}
                </li>
              ))}
            </ul>
          }</div>
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