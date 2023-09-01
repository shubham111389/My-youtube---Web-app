import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import WatchSearchVideo from './WatchSearchVideo';
import ButtonList from './ButtonList';



const Search_Keyword_page = () => {
  const [searchVideo, setSearchVideo] = useState([]);
  const [searchParams] = useSearchParams();


  const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchParams}&key=AaSIzyDJYaxCq0w2WVOdFwRaf_EMbtQ3xm-QGV0`;

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    setSearchVideo(json.items);
  };


 console.log(searchVideo);
  return(
   <div>
      <div className='py-3'>
          <ButtonList/>
      </div>
    <div className='py-8' >
     { searchVideo.map( (video)=>(
      <Link to={"/watch?v=" + video.id} state={{ video: video }}>
      <WatchSearchVideo videoData={video} />
      </Link>
     )
     )}
    </div>
    </div>
  )
};
 /* const { snippet, statistics } = searchVideo.items;
  const { channelTitle, title, thumbnails } = snippet;

  return (
   
    <div className="h-30 w-[30rem] hover:shadow-lg p-2 rounded-lg flex ">
      <img
        className="rounded-lg h-32 w-56"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="mx-2">
        <h1 className="font-bold  text-sm">
          {title.length > 40 ? title.substr(0, 40) + "..." : title}
        </h1>
        <div className="flex">
          <span className="">{channelTitle}</span>
          <img className="w-3 h-3 my-2 mx-1" alt="verified" src={verified} />
        </div>
        <h2 className="text-sm">
          {Number(statistics.viewCount).toLocaleString("en-US")} Views •
        </h2>
      </div>
    </div>
  );
};
*/


export default Search_Keyword_page;
