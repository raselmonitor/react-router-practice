import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops !!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;