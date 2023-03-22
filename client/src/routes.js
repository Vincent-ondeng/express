import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import User from "./pages/User";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import UpdateProfile from "./pages/UpdateProfile";
import UserSingle from "./pages/UserSingle";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/user/write",
        element: <Write />,
      },
      {
        path: "/user/edit",
        element: <UpdateProfile />,
      },
      {
        path: "/user/posts/:id",
        element: <UserSingle />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/me",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
