import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./VideoPage.css";

const RelatedVideos = ({ videoId, setVideo_ID }) => {
  // Use a prop here that will pull the videoId from the VideoPage parent
  // In the "return", you will want to MAP the response you get back -> producing a thumbnail for each video

  const [rVideos, setRVideos] = useState([]);

  const handleClick = (id) => {
    setVideo_ID(id);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet`
        );
        console.log(response.data.items);
        setRVideos(response.data.items);
      } catch (er) {
        console.log(er);
      }
    };
    fetchVideos();
  }, [videoId]);

  return (
    <div className="container">
      {rVideos.map((el) => {
        return (
          <div key={el.id.videoId}>
            <div class="col-6"></div>
            <img
              onClick={() => handleClick(el.id.videoId)}
              className="d-flex"
              style={{ padding: ".5em", "": "1em" }}
              src={el.snippet.thumbnails.default.url}
              width="200"
              height="150"
            />
          </div>
        );
      })}
    </div>
  );
};
export default RelatedVideos;
