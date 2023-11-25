import React from 'react';
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import SingleChefs from '../pages/SingleChef/SingleChef'
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound/NotFound';
import Blogs from '../pages/Blogs/Blogs';
import Chefs from '../pages/Chefs/Chefs';
import Recipes from '../pages/Recipes/Recipes';
import About from '../pages/About/About';
import LoadingPage from '../components/LoadingPage/LoadingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: "/chefs/:id",
        element: <PrivateRoute><SingleChefs></SingleChefs></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/chefs/${params.id}`)
      },
      {
        path: "/recipes",
        element: <PrivateRoute> <Recipes></Recipes></PrivateRoute>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/about",
        element: <About></About>
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
  // {
  //   path: "/loading",
  //   element: <LoadingPage></LoadingPage>
  // },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;