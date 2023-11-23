import React from "react";
import { Homepage } from "./pages/HomePage";
import UpdateItemPage from "./pages/UpdateItemPage";
import { AddNewItem } from "./pages/AddItem";
import Item from "./pages/Item";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { LoginPage } from "./components/LoginPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "add-item", element: <AddNewItem /> },
      { path: "login", element: <LoginPage /> },
      { path: ":id", element: <Item /> },
    ],
  },
]);
