import Home from "./Pages/Home"
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom"
import Layout from "./components/Shared/Layout"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Protected/Dashboard"
import AllNotes from "./Pages/Protected/AllNotes"
import DeletedNotes from "./Pages/Protected/DeletedNotes"
import Profile from "./Pages/Protected/Profile"
import Protected from "./components/Shared/Protected"
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
      <Route path="dashboard" element={<Protected/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="allnotes" element={<AllNotes/>}/>
        <Route path="deletednotes" element={<DeletedNotes/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
    </>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
