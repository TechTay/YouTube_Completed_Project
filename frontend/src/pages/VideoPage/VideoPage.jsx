import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "./RelatedVideos";
import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./VideoPage.css"

const VideoPage = () => {
  const [user, token] = useAuth();
  const { videoId } = useParams();
  const [video_ID, setVideo_ID] = useState(videoId)
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState({
    snippet: { title: "", description: "" },
  });
  const [replies, setReplies] = useState([{}]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${video_ID}&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet`
        );
        console.log(response.data.items);
        setVideo(response.data.items[0]);
      } catch (er) {
        console.log(er);
      }
    };
    fetchVideos();
  }, [video_ID]);

  useEffect(() => getComments(), []);

  const getComments = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comment/${video_ID}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setComments(response.data);
    console.log(response.data);
  };
  useEffect(() => getComments(), []);
  return (
    <div className="form" style={{ textAlign: "center", padding: "2em" }}>
      <iframe
        id="ytplayer"
        type="text/html"
        title="title"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video_ID}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>

      <CommentForm videoId={video_ID} getComments={getComments} />
      <CommentList comments={comments} />
     
      <div>
        <RelatedVideos videoId={video_ID} setVideo_ID={setVideo_ID}/>
      </div>
    </div>
  );
};

export default VideoPage;
