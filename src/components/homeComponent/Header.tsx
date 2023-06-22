import { Link } from "react-router-dom"
import styled from "styled-components"
import {FaBars} from "react-icons/fa";
import hero from "../../assets/undrawhero.svg"
const Header = () => {
  return (
    <Wrapper>
        <div className="navbody">
            <div className="head">
                <h1>VEE<span>NOTES</span></h1>
                <FaBars className="icon ham"/>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"#"}>About</Link>
                    <Link to={"#"}>Contact</Link>
                    <div className="btn-container">
                        <button className="login">Log in</button>
                        <button>sign up</button>
                    </div>
                </nav>
            </div>
        </div>
        <div className="section">
            <div>
                <h1>Secure your notes</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, sit! Cumque, hic sapiente beatae maxime delectus tempora deserunt nihil eaque?</p>
                <button>Get Started</button>
            </div>
            <div className="hero">
                <img src={hero} alt="" className="img" />
            </div>
            {/* <div className="phone"></div> */}
        </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    background-color: var(--primaryColor80);
    color: var(--primaryColor10);
    padding-top: 5rem;
    .navbody{
        padding-block: 1rem;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: var(--primaryColor80);
        z-index: 1;
    }
    .head{
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
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
    }
    .btn-container{
        display: flex;
        gap: 1.5rem;
    }
    .login{
        background-color: transparent;
        border: 1px solid var(--primaryColor);
    }
    .section{
        padding-block: 4rem;
        text-align: center;
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        p{
            letter-spacing: var(--letterSpacing);
        }
        button{
            padding: .8rem 3.2rem;
        }
    }
    .hero{
        display: none;
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
        .section{
            padding-block: 3rem;
            text-align: start;
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 2rem;
            p{
                width: 30em;
            }
        }
        .hero{
            display: block;
            /* width: 70%; */
            width: 25rem;
            height: 22rem;
            /* background-color: green; */
        }
    }
`