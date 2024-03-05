import styled from "styled-components";
import Sidebar from "./Sidebar";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
// import { FaPersonBooth } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
type props = {
    // close: ()=>void,
    showSidebar: boolean
}
const DesktopSidebar = ({showSidebar}:props) => {
  const {theme,toggleTheme} = useTheme()
  // const {removeUser} = useAuth();
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
    background-color: var(--backgroundColor2);
    color: white;
    .main{
      /* box-shadow: var(--shadowlg); */
      width: 20rem;
      height: 100%;
      /* padding-block: 2rem; */
      /* display: grid;
      gap: 5rem; */
      /* background-color: red; */
    }
    .grid{
      display: grid;
      min-height: 100vh;
      padding-block: 1.5rem;
      /* justify-content: space-between; */
      align-content: space-between;
      position: sticky;
      top: 0;
    }
    @media screen and (min-width: 800px){
      display: block;
      /* position: sticky;
      top: 0; */
    }
`