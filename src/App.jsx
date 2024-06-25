import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compmnent/Home';
import UseInfo from './compmnent/UseInfo';
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/UseInfo/:id",
        element: <UseInfo/>,
      },
  ]);

  return (
      <RouterProvider router={router} />
  
  )
}
