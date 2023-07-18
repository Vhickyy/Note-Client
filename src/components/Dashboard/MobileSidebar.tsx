import styled from "styled-components";
import Sidebar from "./Sidebar";
type props = {
    close: ()=>void,
    showSidebar: boolean
}
const MobileSidebar = ({close,showSidebar} : props) => {
  return (
    <Wrapper onClick={close}>
      <div className={`main ${showSidebar ? "show" : "hide"}`}>
        <Sidebar close={close}/>
      </div>
    </Wrapper>
  )
}

export default MobileSidebar;

const Wrapper = styled.div`
  .main{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-block: .5rem;
    /* background-color: burlywood; */
    background-color: #f5f5f599;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`