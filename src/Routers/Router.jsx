import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LogIn from "../Auth/LogIn";
import Register from "../Auth/Register";
import Error from "../Pages/Error";
import Home from "../Pages/Home";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/register',
            element: <Register></Register>,
        },
        {
            path:'/login',
            element: <LogIn></LogIn>,
        }
      ]
    },
  ]);