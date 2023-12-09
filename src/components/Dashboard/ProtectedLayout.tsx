import { Outlet } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react"
import DesktopSidebar from "./DesktopSidebar";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/axios";
import { customFetch } from "../../api/axios";

const ProtectedLayout = () => {
  const [showSidebar, setShowsidebar] = useState(false);
  const toggleSidebar = () => {
      setShowsidebar(preState =>!preState);
  }
  const {data:user,error} = useQuery({queryKey:["user"],queryFn: getUser});
  console.log(user);

  customFetch.interceptors.response.use(
    response => {
      console.log("hi");
      return response
    },
    error => {
      console.log("hey");
      if(error.response.status === 401){

      }
      return Promise.reject(error)
    },
  )
  
  return (
    <Wrapper>
      <MobileSidebar showSidebar={showSidebar} close={toggleSidebar}/>
      <DesktopSidebar showSidebar={showSidebar}/>
      <main>
        <Outlet context={{toggleSidebar,user}}/>
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