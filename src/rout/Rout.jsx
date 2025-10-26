import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../home/Home";
import Bed from "../component/card/Bed";
import Error from "./Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("all_item.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/itemCard/:id",
        Component: Bed,
        loader: () => fetch("all_item.json"),
      },
    ],
  },
]);
