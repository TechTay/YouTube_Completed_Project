import axios from "axios"
import { useNavigate, useState } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"



  
  
  // const [, setText] = useState([""]);

  
      let newComment = 
        {
            "video_id": 'videoId',
            "text": Text,
            "likes": 0,
            "dislikes": 0
        }
        
        const CommentForm = (props) => {
            const [user, token] = useAuth()
            const [text, setText] = ([""]);
            const navigate = useNavigate()
            const [handleInputChange, handleSubmit] = useCustomForm(newComment, postNewComment)
        
            async function postNewComment(){
                try {
                    let response = await axios.post("http://127.0.0.1:8000/api/comment/", newComment, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
                    navigate("/")
                } catch (error) {
                    
                }
            }   

  

  return (
  <div className="container">
    <h2>{user.username}</h2>
    <h5>You have to be logged in to comment!</h5>
    <form className="form" onSubmit={handleSubmit}>
      <label style={{'padding':'1em'}}>
        Comment: {""}
        <input type="text"  value={text} onChange={handleInputChange} />
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  </div>
)};
;

export default CommentForm