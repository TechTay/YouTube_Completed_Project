import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const RelatedVideos = (props) => {
    // Use a prop here that will pull the videoId from the VideoPage parent
    // In the "return", you will want to MAP the response you get back -> producing a thumbnail for each video
  
    // let hardCodedVideoId = "1mOZidVwXi0"
     const [rVideos, setRVideos] = useState([videoId]);
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}=video&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4`         
);
         console. log(response.data.items);
         setRVideos(response.data)
        } catch (er) {
          console.log(er);
        }
      };
      fetchVideos();
    }, []);


 
    return (
       <div>
            {rVideos.map((el) => {
                return (
                    <Link to={`videos/${el.id.videoId}`}>
            <img src={el.snippet.thumbnails.default.url} width='200' height= '150'/>
          </Link>
                )
            })}
          </div>
    )

}
export default RelatedVideos