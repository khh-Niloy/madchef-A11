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
import Detailes from "./Pages/Detailes.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import Register from "./Pages/Authentication/Register.jsx";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import { Toaster } from "react-hot-toast";
import Update from "./Pages/Update.jsx";
import Purchase from "./Pages/Purchase.jsx";
import DarkModeProvider from "./DarkModeProvider/DarkModeProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ErrorPage from "./Pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/allfood/foodDetailes/:id",
        element: <Detailes></Detailes>,
        loader: ({ params }) =>
          fetch(
            `https://madchef-server-side.vercel.app/allfood/foodDetailes/${params.id}`
          ),
      },
      {
        path: "/purchase/:id",
        element: <Purchase></Purchase>,
        loader: ({ params }) =>
          fetch(
            `https://madchef-server-side.vercel.app/allfood/foodDetailes/${params.id}`
          ),
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
        path: "/updatefood/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://madchef-server-side.vercel.app/allfood/fooddetailes/${params.id}`
          ),
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/myorder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={true} />
        </AuthContextProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  </StrictMode>
);
