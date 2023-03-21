import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchPage = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=${props.search}&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet`
        );
        console.log(response.data.items);
        setVideos(response.data.items);
      } catch (er) {
        console.log(er);
      }
    };
    fetchVideos();
  }, []);
  
  return (
    <div className="container">

      {videos.map((el) => {
        return (
          <Link to={`videos/${el.id.videoId}`}>
            <img style={{'padding': '1.5em', 'margin': '1em'}} src={el.snippet.thumbnails.default.url} width='250' height= '200'/>
          </Link>
        );
      })}
      
    </div>
  );
};

export default SearchPage;
