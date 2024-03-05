import styled from "styled-components";
import Sidebar from "./Sidebar";
import {  FaTimes } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
type props = {
    close: ()=>void,
    showSidebar: boolean
}
const MobileSidebar = ({close,showSidebar} : props) => {
  const {theme,toggleTheme} = useTheme();
  return (
    <Wrapper onClick={close} className={`main ${showSidebar ? "show" : "hide"}`}>
      <div className="nav" onClick={(e)=> {e.stopPropagation()}}>
        <div className="grid">
          <div className="flex">
            <h3>VEENOTES</h3>
            <FaTimes className="icon" onClick={close}/>
          </div>
          <Sidebar close={close}/>
          <div>
            {theme == "dark" ? <BsSunFill className="icon" onClick={toggleTheme}/> : <BsMoonFill className="icon" onClick={toggleTheme}/>}
            <div className="flex">
              {/* <FaPersonBooth /> */}
              <Link to={"#"}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MobileSidebar;

const Wrapper = styled.aside`
    /* background-color: #f5f5f599; */
    position: fixed;
    top:0;
    z-index: 1;
    height: 100%;
    width: 100%;
    /* background-color: #f5f5f599; */
    inset: 0;
    padding-block: .5rem;
    box-shadow: var(--shadowlg); 
  .nav{
    height: 100%;
    width: 20rem;
    background-color: var(--backgroundColor2);
    box-shadow: var(--shadowlg); 
    color: white;
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
  h3{
    margin: 0;
  }
  .icon{
    border: 2px solid var(--primaryColor80);
    padding: .3rem;
    border-radius: .25rem;
  }
  .grid{
      display: grid;
      padding-inline: 1rem;
      gap: 3.5rem;
      padding-block: 2rem;
      /* background-color: red; */
    }
  @media screen and (min-width: 800px) {
    display: none;
  }
`