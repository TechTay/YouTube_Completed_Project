import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../../components/CommentList/CommentList";
import RelatedVideos from "./RelatedVideos";
import CommentForm from "../../components/CommentForm/CommentForm";
import ReplyForm from "../../components/Replies/ReplyForm/ReplyForm";
import ReplyList from "../../components/Replies/ReplyList/ReplyList";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Comment from "../../components/CommentList/Comment";

const VideoPage = (props) => {
  const [user, token] = useAuth();
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState({
    snippet: { title: "", description: "" },
  });
  const [replies, setReplies] = useState([{}]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet`
        );
        console.log(response.data.items);
        setVideo(response.data.items[0]);
      } catch (er) {
        console.log(er);
      }
    };
    fetchVideos();
  }, []);

  const getReply = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/replies/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setReplies(response.data);
    console.log(response.data);
  };
  useEffect(() => getComments(), []);

  const getComments = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comment/${videoId}/`,
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
    <div style={{ textAlign: "center", padding: "2em" }}>
      <iframe
        id="ytplayer"
        type="text/html"
        title="title"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>

      <CommentForm videoId={videoId} getComments={getComments} />
      <CommentList comments={comments} />
      <Comment commentId={props.comment.id} getReply={getReply} />
      <div>
        <RelatedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
