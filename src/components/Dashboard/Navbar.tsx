import { FaBars, FaSearch } from "react-icons/fa"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Wrapper>
        <div className="head">
            <div className="logo">
                <FaBars className="icon"/>
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
            border: 2px solid white;
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