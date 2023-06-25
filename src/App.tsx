import Home from "./Pages/Home"
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom"
import Layout from "./components/Shared/Layout"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
    </>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
