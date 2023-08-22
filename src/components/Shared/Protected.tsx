import { Outlet } from "react-router-dom";
import MobileSidebar from "../Dashboard/MobileSidebar";
import { useState } from "react"

const Protected = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  const toggleSidebar = () => {
      setShowsidebar(preState =>!preState)
      console.log("here",showSidebar);
  }
  return (
    <>
    <MobileSidebar showSidebar={showSidebar} close={toggleSidebar}/>
      <Outlet context={toggleSidebar}/>
    </>
  )
}

export default Protected