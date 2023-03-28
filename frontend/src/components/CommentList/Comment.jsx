import axios from "axios";
import { useState,useEffect } from "react";
import ReplyForm from "../Replies/ReplyForm/ReplyForm";
import ReplyList from "../Replies/ReplyList/ReplyList";
import useAuth from "../../hooks/useAuth";

const Comment = ({comment}) => {
  const [user, token] = useAuth();
  const [replies, setReplies] = useState([{}]);

  const getReplies = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/replies/?id=${comment.id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    setReplies(response.data);
    console.log(response.data);
  };
  useEffect(() => getReplies(), []);

  return (
    <div>
      <div className="commentText">{comment.text}</div>
      <ReplyForm commentId={comment.id} getReplies={getReplies}/>
      <ReplyList replies={replies} />
    </div>
  );
};

export default Comment;
