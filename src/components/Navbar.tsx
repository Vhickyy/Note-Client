import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Wrapper>
        <div className="head">
            <h2>VEE<span>NOTES</span></h2>
            <FaBars className="icon ham"/>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"#"}>About</Link>
                <Link to={"#"}>Contact</Link>
                <div className="btn-container">
                    <Link to={"login"}><button className="login">Log in</button></Link>
                    <Link to={"signup"}><button>sign up</button></Link>
                </div>
            </nav>
        </div>
    </Wrapper>
  )
}

export default Navbar
const Wrapper = styled.div`
    color: var(--primaryColor80);
    padding-block: .5rem;
    position: fixed;
    top: 0;
    width: 100%;
    /* background-color: var(--primaryColor80); */
    background-color: white;
    z-index: 100;
    box-shadow: 0px 4px 6px -1px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    .head{
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            margin: 0;
        }
    }
    nav{
        display: none;
    }
    span{
        color: var(--primaryColor);
    }
    .ham{
        display: block;
        width: 1.5rem;
        height: 1.5rem;
    }
    .btn-container{
        display: flex;
        gap: 1.5rem;
    }
    .login{
        background-color: transparent;
        border: 1px solid var(--primaryColor);
        color: var(--primaryColor80);
    }
    a{
        color: var(--primaryColor80);
    }
    @media screen and (min-width:960px){
        .ham{
            display: none;
        }
        nav{
            display: flex;
            align-items: center;
            width: 55%;
            justify-content: space-between;
        }
    }
`