import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registro from "./Registro";
import ReactDOM from "react-dom/client";
const Rutas = createBrowserRouter([
  {
    path: "/registro",
    element: <Registro/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider Rutas={Rutas} />
  </React.StrictMode>
);


export default Rutas;
