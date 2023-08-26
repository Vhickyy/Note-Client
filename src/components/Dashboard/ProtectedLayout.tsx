import { Outlet } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react"
import DesktopSidebar from "./DesktopSidebar";
import styled from "styled-components";

const ProtectedLayout = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  const toggleSidebar = () => {
      setShowsidebar(preState =>!preState)
      console.log("here",showSidebar);
  }
  return (
    <Wrapper>
      <MobileSidebar showSidebar={showSidebar} close={toggleSidebar}/>
      <DesktopSidebar showSidebar={showSidebar}/>
      <main>
        <Outlet context={toggleSidebar}/>
      </main>
    </Wrapper>
  )
}

export default ProtectedLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width:800px){
    grid-template-columns: auto 1fr;
  }
`