import { Link, useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const comment = useLoaderData();
    return (
        <div>
            <h3>Comment id : {comment.id}</h3>
            <p>Author: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
            <Link to="/comment"><button>Go Back</button></Link>
        </div>
    );
};

export default CommentDetails;