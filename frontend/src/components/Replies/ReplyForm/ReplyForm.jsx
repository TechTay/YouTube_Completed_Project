import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useCustomForm from "../../../hooks/useCustomForm";

// const [, setText] = useState([""]);

const ReplyForm = (props) => {
  const [user, token] = useAuth();
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(postReply);

  async function postReply(formData) {
    try {
      let reply = {
        comment_Id: props.commentId,
        text: formData.text,
        user_id: 1,
      };
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comment/${props.videoId}/`,
        reply,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
     props.getReply() 
    } catch (error) {}
  }

  return (
    <div className="container">
      <h5>{user.username}</h5>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label style={{ padding: "1em" }}>
          Reply: {""}
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

export default ReplyForm