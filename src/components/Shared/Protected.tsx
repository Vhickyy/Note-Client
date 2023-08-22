import { Outlet } from "react-router-dom";
import MobileSidebar from "../Dashboard/MobileSidebar";
import { useState } from "react"
import DesktopSidebar from "../Dashboard/DesktopSidebar";
import styled from "styled-components";

const Protected = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  const toggleSidebar = () => {
      setShowsidebar(preState =>!preState)
      console.log("here",showSidebar);
  }
  return (
    <Wrapper>
      <MobileSidebar showSidebar={showSidebar} close={toggleSidebar}/>
      <DesktopSidebar showSidebar={showSidebar}/>
      <div className="main">
        <Outlet context={toggleSidebar}/>
      </div>
    </Wrapper>
  )
}

export default Protected;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  .main{
    /* min-height: 100vh; */
  }
  @media screen and (min-width:800px){
    grid-template-columns: auto 1fr;
  }
`