import styled from "styled-components";
import Sidebar from "./Sidebar";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
// import { FaPersonBooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
type props = {
    // close: ()=>void,
    showSidebar: boolean
}
const DesktopSidebar = ({showSidebar}:props) => {
  const {theme,toggleTheme} = useTheme()
  const {removeUser} = useAuth();
  return (
    <Wrapper>
      <div className={`main ${showSidebar ? "hide" : "show"}`}>
        <div className="grid">
          <h3>VeeNotes</h3>
          <div className="side">
            <Sidebar />
          </div>
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

export default DesktopSidebar;
const Wrapper = styled.aside`
    display: none;
    min-height: 100dvh;
    background-color: var(--backgroundColor);
    .main{
      box-shadow: var(--shadowlg);
      width: 17rem;
      height: 100%;
    }
    .grid{
      display: grid;
      gap: 2rem;
      padding-block: 2rem;
      position: sticky;
      top: 0;
    }
    @media screen and (min-width: 800px){
      display: block;
      /* position: sticky;
      top: 0; */
    }
`