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





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/art')
        },
        {
          path:'/details/:id',
          element: <Details></Details>,
          loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`)
        },
        {
          path:'/all',
          element: <AllCraftItems></AllCraftItems>,
          loader: ()=> fetch('http://localhost:5000/user')
        },
        {
          path:'/allShow/:id',
          element: <ShowDetails></ShowDetails>,
        },
        {
          path: '/add',
          element: <AddCraftItem></AddCraftItem>,
        },
        {
          path: '/my',
          element: <MyCraftList></MyCraftList>,
        },
        {
          path:'/update/:id',
          element: <Update></Update>,
          loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
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