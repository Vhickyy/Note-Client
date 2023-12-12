import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useEffect, useState } from "react"
import DesktopSidebar from "./DesktopSidebar";
import styled from "styled-components";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { getUser } from "../../api/axios";
// import { customFetch } from "../../api/axios";
import { AuthContextProvider, useAuth } from "../../context/AuthContext";

const ProtectedLayout = () => {
  // const navigate = useNavigate()
  const [showSidebar, setShowsidebar] = useState(false);
  const {user} = useAuth()
  const navigate = useNavigate()

  const toggleSidebar = () => {
      setShowsidebar(preState =>!preState);
  }
  // useEffect(()=>{
  //   if(!user){
  //     navigate("/login")
  //   }
  // },[])
 
  
  return (
    <Wrapper>
      <MobileSidebar showSidebar={showSidebar} close={toggleSidebar}/>
      <DesktopSidebar showSidebar={showSidebar}/>
      <main>
        <Outlet context={{toggleSidebar}}/>
      </main>
    </Wrapper>
  )
}

export default ProtectedLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100dvh;
  main{
    background-color: var(--secondaryColor);
  }
  @media screen and (min-width:800px){
    grid-template-columns: auto 1fr;
  }
`