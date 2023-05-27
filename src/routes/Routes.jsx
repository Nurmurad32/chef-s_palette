import React from 'react';
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import Login from '../pages/home/Login';
import Register from '../pages/home/Register';
import SingleChefs from '../pages/home/SingleChef'
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound/NotFound';
import Blogs from '../pages/home/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://chef-s-palette-server-nurmurad32.vercel.app/chefs')
      },
      {
        path: "/chefs/:id",
        element:  <PrivateRoute><SingleChefs></SingleChefs></PrivateRoute> ,
        loader: ({params}) => fetch(`https://chef-s-palette-server-nurmurad32.vercel.app/chefs/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;