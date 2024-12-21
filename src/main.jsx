import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import AllFood from "./Pages/AllFood.jsx";
import Gallery from "./Pages/Gallery.jsx";
import MyFood from "./Pages/MyFood.jsx";
import AddFood from "./Pages/AddFood.jsx";
import MyOrder from "./Pages/MyOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allfood",
        element: <AllFood></AllFood>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/myfood",
        element: <MyFood></MyFood>,
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/myorder",
        element: <MyOrder></MyOrder>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
