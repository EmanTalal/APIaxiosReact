import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../index.css";
import UseInfo from "../compmnent/UseInfo";
import Home from "../compmnent/Home";

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
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );