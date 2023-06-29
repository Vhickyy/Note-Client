import { FaBars, FaSearch } from "react-icons/fa"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import { useState } from "react"

const Navbar = () => {
    const [showSidebar, setShowsidebar] = useState(false);
    const openSidebar = () => {
        setShowsidebar(true)
    }
    const closeSidebar = () => {
        setShowsidebar(false)
    }
  return (
    <Wrapper>
        {showSidebar && <Sidebar close={closeSidebar}/>}
        <div className="head">
            <div className="logo">
                <FaBars className="icon" onClick={openSidebar}/>
                <h3>Dashboard</h3>
            </div>
            <FaSearch className="icon"/>
        </div>
        <div className="empty"></div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.header`
/* background-color: yellowgreen; */
    .head{
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h3{
            margin: 0;
        }
        .icon{
            border: 2px solid var(--primaryColor80);
            padding: .3rem;
            border-radius: .25rem;
        }
    }
    .empty{
        height: 1rem;
        width: 100%;
        background-color: var(--primaryColor);
    }
`