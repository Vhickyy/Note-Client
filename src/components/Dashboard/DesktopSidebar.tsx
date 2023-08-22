import styled from "styled-components";
import Sidebar from "./Sidebar";
type props = {
    // close: ()=>void,
    showSidebar: boolean
}
const DesktopSidebar = ({showSidebar}:props) => {
  return (
    <Wrapper>
      <div className={`main ${showSidebar ? "hide" : "show"}`}>
        <div className="side">

        <Sidebar />
        </div>
      </div>
    </Wrapper>
  )
}

export default DesktopSidebar;
const Wrapper = styled.aside`
    display: none;
    position: relative;
    min-height: 100vh;
    position: sticky;
      top: 0;
    .main{
      box-shadow: var(--shadowlg);
      width: 17rem;
      height: 100%;
    }
    .side{
      position: sticky;
      top: 0;
    }
    @media screen and (min-width: 800px){
      display: block;
      /* position: sticky;
      top: 0; */
    }
`