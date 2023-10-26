import Home from "./Pages/Home"
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom"
import Layout from "./components/Home/Layout"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import VerifyCode from "./Pages/VerifyCode"
import Dashboard from "./Pages/Protected/Dashboard"
import AllNotes from "./Pages/Protected/AllNotes"
import DeletedNotes from "./Pages/Protected/DeletedNotes"
import Profile from "./Pages/Protected/Profile"
import Protected from "./components/Dashboard/ProtectedLayout"
import AddNote from "./Pages/Protected/AddNote"
function App() {
  // fetch("/api").then(data=>data.json()).then(data=>console.log(data)).catch(err=>console.log(err))
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" >
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="verifycode" element={<VerifyCode/>}/>
      </Route>
      <Route path="dashboard" element={<Protected/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="allnotes" element={<AllNotes/>}/>
        <Route path="deletednotes" element={<DeletedNotes/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="addnote" element={<AddNote/>}/>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
