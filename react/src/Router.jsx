import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login.jsx";
import SignUp from "./views/SignUp.jsx";
import User from "./views/User.jsx";
import Dashboard from "./views/Dashboard.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";

import GuestLayout from "./components/GuestLayout.jsx";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path:"/",
        element: <Navigate to="/users" />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }, {
        path: "/users",
        element: <User />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children:[
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ]
  },

 
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
