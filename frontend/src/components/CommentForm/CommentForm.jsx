import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

// const [, setText] = useState([""]);

const CommentForm = (props) => {
  const [user, token] = useAuth();
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(postNewComment);

  async function postNewComment(formData) {
    try {
      let newComment = {
        video_id: props.videoId,
        text: formData.text,
        likes: 0,
        dislikes: 0,
      };
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comment/${props.videoId}/`,
        newComment,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
     props.getComments() 
    } catch (error) {}
  }
  
  return (
    <div className="container">
      <h2>{user.username}</h2>
      <h5>You have to be logged in to comment!</h5>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label style={{ padding: "1em" }}>
          Comment: {""}
          <input
            name="text"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default CommentForm;
