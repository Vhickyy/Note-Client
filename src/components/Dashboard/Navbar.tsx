import { FaBars, FaSearch } from "react-icons/fa"
import styled from "styled-components"
// import MobileSidebar from "./MobileSidebar"
import { useOutletContext } from "react-router-dom"

type Page = {
    page: string
}
const Navbar = ({page}: Page) => {
  const toggleSidebar = useOutletContext()
  return (
    <Wrapper>
        <div className="head">
            {/* <div className="logo"> */}
                <FaBars className="icon" onClick={toggleSidebar}/>
                <h3>{page}</h3>
            {/* </div> */}
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
        width: min(1440px,90%);
        /* width: 90%; */
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: .5rem;
        /* .logo{
            display: flex;
            align-items: center;
            gap: 1rem;
        } */
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
        height: .5rem;
        width: 100%;
        background-color: var(--primaryColor);
    }
`