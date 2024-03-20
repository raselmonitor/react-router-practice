import { Link, useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
    const { id, name, email, body } = comment;
    const navigate = useNavigate();
    const commentStyle = {
        border: "2px solid yellow",
        padding: "10px",
        borderRadius: "15px"
    }

    const handleNavigate = () => {
        navigate(`/comment/${id}`);
    }
    return (
        <div  style={commentStyle}>
            <h3>Name : {name}</h3>
            <p>Email: {email} </p>
            {/* <Link to={`/comment/${id}`}>More Details</Link> */}
            <button onClick={handleNavigate}>more details</button>
        </div>
    );
};

export default Comment;