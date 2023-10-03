import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
import PvtRouts from "./PvtRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Posts></Posts>,
          },
          {
            path: "/category/0",
            element: <Posts></Posts>,
          },
          {
            path: "/category/:id",
            element: "hi",
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news/:id",
        element: (
          <PvtRouts>
            <PostDetails></PostDetails>
          </PvtRouts>
        ),
        loader: () => fetch("../../news.json"),
      },
    ],
  },
]);

export default router;
