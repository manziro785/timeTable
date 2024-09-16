import {useState} from 'react';
import {RouterProvider} from "react-router-dom";
import {routers} from "./app/routers.jsx";
import './common.css'
function App() {

  return (
    <>
      <RouterProvider router={routers} />

    </>
  )
}

export default App