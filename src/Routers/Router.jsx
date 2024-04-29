import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LogIn from "../Auth/LogIn";
import Register from "../Auth/Register";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import AllCraftItems from './../Pages/AllCraftItems';
import AddCraftItem from './../Pages/AddCraftItem';
import MyCraftList from './../Pages/MyCraftList';
import Details from "../Components/Details";
import ShowDetails from "../Pages/AllShow/ShowDetails";
import Update from "../Pages/Update";
import PrivateRoute from './PrivateRoute';





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('https://b9a10-server-side-rafaulgoni.vercel.app/art')
        },
        {
          path:'/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({ params }) => fetch(`https://b9a10-server-side-rafaulgoni.vercel.app/art/${params.id}`)
        },
        {
          path:'/all',
          element: <AllCraftItems></AllCraftItems>,
          loader: ()=> fetch('https://b9a10-server-side-rafaulgoni.vercel.app/user')
        },
        {
          path:'/allShow/:id',
          element: <PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
        },
        {
          path: '/add',
          element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
        },
        {
          path: '/myCraft',
          element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute> ,
        },
        {
          path:'/update/:id',
          element: <Update></Update>,
          loader: ({ params }) => fetch(`https://b9a10-server-side-rafaulgoni.vercel.app/user/${params.id}`)
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