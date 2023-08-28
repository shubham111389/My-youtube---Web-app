import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_KEYWORD_API_URL } from '../constants';

const Search_Keyword_page = () => {
  const [searchVideo, setSearchVideo] = useState([]);
  const searchParams = useSearchParams;


  const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchParams}&key=AIzaSyDJYaxCq0w2WVOdFwRaf_EMbtQ3xm-QGV0`;

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    setSearchVideo(json.items);
  };

  console.log(searchVideo);

  return (
    <div>
      <h1>data</h1>
    </div>
  );
}

export default Search_Keyword_page;
