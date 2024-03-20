import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Comments from './Components/Comments/Comments.jsx';
import CommentDetails from './Components/CommentDetails/CommentDetails.jsx';
import ErrorPage from './Components/Errorpage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/comment",
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: "/comment/:commentId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CommentDetails></CommentDetails>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
