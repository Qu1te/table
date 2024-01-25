import React from "react";
import Main from "./pages/Main";
import GrupOne from "./pages/GrupOne";
import GrupTwo from "./pages/GrupTwo";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/GrupOne",
    element:<GrupOne/>
  },
  {
    path:"/GrupTwo",
    element:<GrupTwo/>
  }
])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
