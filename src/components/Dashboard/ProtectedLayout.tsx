import { Navigate, Outlet, useLocation} from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react"
import DesktopSidebar from "./DesktopSidebar";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const ProtectedLayout = () => {
  const location = useLocation();
  const [showSidebar, setShowsidebar] = useState(false);
  const {user,loading} = useAuth()

  const toggleSidebar = () => {
      setShowsidebar(preState =>!preState);
  }
 
  return (
    <>
     {loading ? <h1>loading</h1> : user?.name ? <Wrapper>
        <MobileSidebar showSidebar={showSidebar} close={toggleSidebar}/>
        <DesktopSidebar showSidebar={showSidebar}/>
        <main>
          <Outlet context={{toggleSidebar}}/>
        </main>
      </Wrapper> : <Navigate to={"/login"} state={{from:location}} replace  />}
      <ToastContainer/>
    </>
  )
}

export default ProtectedLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100dvh;
  main{
    background-color: var(--secondaryColor2);
  }
  @media screen and (min-width:800px){
    grid-template-columns: auto 1fr;
  }
`