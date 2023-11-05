import React from 'react'
import { Link } from 'react-router-dom';
import search from "../assets/img/search.png";
import { useDispatch, useSelector } from 'react-redux';
import { toggleList} from '../utils/suggestionSlice';

const SuggestionList  = (storage) => {

    const isListOpen = useSelector((store) => store.suggestion.isSuggestionOpen);
    
    const dispatch = useDispatch();
    const suggestedListHandler= ()=>{
        dispatch(toggleList());
      };
 
   

   const val1= storage.storage;
  return !isListOpen ?null: (
    <div><div className="bg-white px-5 w-[41.666667%] shadow-lg rounded-lg absolute ">
    {
       
      <ul>
        {val1.map((item,index) => (
           <Link to={"/search?v=" + val1[index]}>
           <li className="p-1 py-1 hover:bg-gray-200 flex" key={item} onClick={() => suggestedListHandler()} >
          
             <img src={search} className="w-4 mx-2 my-1" alt="search" />
             {item}
          
         </li>
         </Link>
        ))}
      </ul>
    }</div> </div>
  )
}

export default SuggestionList;