import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<Layout />}>
      <Route path="/" lazy={async() => {
        const Main = (await import("./pages/main")).default
        return  {element: <Main />}
      }} />
      <Route path="/users" lazy={async() => {
        const Users = (await import("./pages/Users")).default
        return  {element: <Users />}
      }} />
      <Route path="/post/:id" lazy={async() => {
        const User = (await import("./pages/userDetails")).default
        return  {element: <User />}
      }} />
    </Route>
  )
);


const Router = () => <RouterProvider router={router} />

export default Router;