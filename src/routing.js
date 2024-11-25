import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";
import Search from "./components/Search";
import Moviedetails from "./components/Moviedetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "toprated",
        element: <TopRated />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "movie",
        element: <Moviedetails />,
      },
    ],
  },
]);

export default router;
