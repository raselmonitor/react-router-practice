import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import "./Comments.css"

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div>
            <h3>Comments: {comments.length}</h3>
            <div className="comments">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;