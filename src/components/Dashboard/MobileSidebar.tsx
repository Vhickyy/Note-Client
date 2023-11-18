import styled from "styled-components";
import Sidebar from "./Sidebar";
import { FaPersonBooth, FaTimes } from "react-icons/fa";
type props = {
    close: ()=>void,
    showSidebar: boolean
}
const MobileSidebar = ({close,showSidebar} : props) => {
  return (
    <Wrapper onClick={close} className={`main ${showSidebar ? "show" : "hide"}`}>
      <div className="nav" onClick={(e)=> {e.stopPropagation()}}>
        <div className="grid">
          <div className="flex">
            <h3>VEENOTES</h3>
            <FaTimes className="icon" onClick={close}/>
          </div>
          <Sidebar close={close}/>
          <div className="flex">
            <FaPersonBooth />
            Logout
            {/* <Link to={}>Logout</Link> */}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MobileSidebar;

const Wrapper = styled.aside`
    background-color: #f5f5f599;
    position: fixed;
    top:0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: #f5f5f599;
    inset: 0;
    padding-block: .5rem;
    box-shadow: var(--shadowlg); 
  .nav{
    height: 100%;
    width: 20rem;
    background-color: whitesmoke;
    box-shadow: var(--shadowlg); 
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