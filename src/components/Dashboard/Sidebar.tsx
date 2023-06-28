import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
        <div className="sidebar">
            <div>
                <h3>VEENOTES</h3>
                <FaTimes className="icon"/>
            </div>
        </div>
    </Wrapper>
  )
}

export default Sidebar;

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    /* background-color: burlywood; */
    background-color: #f5f5f599;
    .sidebar{
        height: 100%;
        width: 70%;
        background-color: whitesmoke;
        box-shadow: var(--shadowlg);
        /* z-index: -10; */
    }
`