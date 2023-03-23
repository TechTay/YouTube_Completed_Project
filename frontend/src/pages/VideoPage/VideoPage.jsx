import React from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import CommentForm from "../../components/CommentForm/CommentForm";

const VideoPage = (props) => {
  const {videoId} = useParams()
    return (
        <div style={{textAlign: 'center', padding: '2em'}}>
          <iframe
        id="ytplayer"
        type="text/html"
        title="title"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      > 
      
      {/* <div>{props.snippet.title}</div>
      <div>{props.snippet.description}</div> */}
      </iframe>
       <CommentForm videoId={videoId}/>
      {/* <RelatedVideos /> */}
      <div><RelatedVideos /></div>
        </div>
    )
}

export default VideoPage

