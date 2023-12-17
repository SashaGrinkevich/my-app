import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Main from "../pages/Main";
import User from "../pages/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Main />} />
      <Route path="/users/:name" element={<User />} />
    </>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
