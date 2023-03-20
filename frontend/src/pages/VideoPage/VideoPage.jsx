import React from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
// Import RelatedVideos and display in THIS page

const VideoPage = () => {
  const {videoId} = useParams()
  
    return (
        <div style={{textAlign: 'center'}}>
          <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <RelatedVideos />
      {/* RelatedVideos component */}
        </div>
    )
}

export default VideoPage

