import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

const Protected = () => {
  return (
    <>
        <Navbar />
        <h1>protected</h1>
        <Outlet/>
    </>
  )
}

export default Protected