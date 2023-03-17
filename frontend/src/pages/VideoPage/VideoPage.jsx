import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";

const videoPage = () => {
    const [videos, setVideos] = useState([]);
    
  
    useEffect(() => {
      const getAllVideos = async () => {
        try {
          let response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search?q=MotivationalVideos&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet",
          );
          console.log(response.data);
          navigate("/")
        } catch (er) {
          console.log(er);
        }
      };
      getAllVideos();
    }, []);
  
    return (
        <div>

        </div>
    )
}

export default videoPage