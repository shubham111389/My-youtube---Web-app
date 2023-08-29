import React from "react";
import logo from "../assets/img/logo.png";
import menu from "../assets/img/menu.png";
import user from "../assets/img/user.png";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { cacheResults } from "../utils/searchSlice";
import search from "../assets/img/search.png";
import SuggestionList from "./SuggenstionList";
import { toggleList } from "../utils/suggestionSlice";





const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestedValue,setSuggestedValue]=useState(false);

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
  const suggestedListHandler= ()=>{
    dispatch(toggleList());
  };
 

  return (
      <>
    <div className="grid grid-flow-col shadow-lg p-2  ">
      <div className="flex col-span-1 py-3">
        <img
          src={menu}
          className="h-10 cursor-pointer py-2 px-5"
          alt="menu-icon"
          onClick={() => toggleMenuHandler()}
          
        />
        <a>
        <img src={logo} className="h-10 p-1 " alt="logo-icon" />
        </a>
      </div>
       <div className="col-span-10 mx-24">
      <div className="flex py-3">
          <input
            type="text"
            className="w-2/3 h-10 p-2 py-4 border border-gray-400 text-gray-900 text-sm rounded-l-full focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={suggestedListHandler}
          
          />
          <button className="bg-gray-50 border border-gray-400 h-10 w-14 rounded-r-full p-2 font-bold justify-center">
            <img src={search} className="w-4 mx-2 my-1" alt="search" />
          </button>
        </div>
          
        <div>
        { suggestedValue? null : <SuggestionList  storage={suggestions} />}
        </div>
           </div> 
      <div>
        <div className="py-3">
          <img src={user} className="h-8 " alt="user-icon" />
        </div>
      </div>
      
     
     </div>
    </>
   
  );
};

export default Header;