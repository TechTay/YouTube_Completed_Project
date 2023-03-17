import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";


let initialValues = {
  videoId: "",
  description: "",
  title: "",
};

const SearchPage = () => {
  const [user, token] = useAuth();
  const [videoIds, setVideoIds] = useState([]);
  

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?q=MotivationalVideos&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet", initialValues
        );
        console.log(response.data);
        navigate("/")
      } catch (er) {
        console.log(er);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h2>{user.username}</h2>
      
    </div>
  );
};

export default SearchPage;
