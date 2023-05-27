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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/chefs')
      },
      {
        path: "/chefs/:id",
        element:  <PrivateRoute><SingleChefs></SingleChefs></PrivateRoute> ,
        loader: ({params}) => fetch(`http://localhost:3000/chefs/${params.id}`)
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