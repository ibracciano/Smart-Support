// import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";

import Home from "./pages/users/Home";
import Register from "./pages/auth/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

      //   children: [
      //     {
      //       path: "team",
      //       element: <Team />,
      //       loader: teamLoader,
      //     },
      //   ],
    },
    {
      path: "connexion",
      element: <Login />,
    },

    {
      path: "inscription",
      element: <Register />,
    },
  ]);
  return (
    <div className="flex">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
