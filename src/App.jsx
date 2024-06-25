
import Generator1 from "./components/Automatic-Generator/Generator1"
import Generator2 from "./components/Manual-Generator/Generator2"
import Home from "./components/Home/Home"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/generator1",
      element: <Generator1/>
    },
    {
      path: "/generator2",
      element: <Generator2/>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
