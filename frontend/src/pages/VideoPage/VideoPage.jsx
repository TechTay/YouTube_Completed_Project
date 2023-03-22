import React from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";


const VideoPage = () => {
  const {videoId} = useParams()
  
    return (
        <div style={{textAlign: 'center', padding: '2em'}}>
          <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <RelatedVideos />
        </div>
    )
}

export default VideoPage

