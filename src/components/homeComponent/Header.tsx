import styled from "styled-components"
import hero from "../../assets/undrawhero.svg"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
        <Navbar />
        <div className="section">
            <div>
                <h1>Secure your notes</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, sit! Cumque, hic sapiente beatae maxime delectus tempora deserunt nihil eaque?</p>
                <Link to={"/signup"}><button>Get Started</button></Link>
            </div>
            <div className="hero">
                <img src={hero} alt="" className="img" />
            </div>
        </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    background-color: var(--primaryColor80);
    color: var(--primaryColor10);
    padding-top: 5rem;
    span{
        color: var(--primaryColor);
    }
    .section{
        padding-block: 4rem 4rem;
        text-align: center;
        width: min(var(--maxWidth),90%);
        margin-inline: auto;
        p{
            letter-spacing: var(--letterSpacing);
        }
        button{
            margin-top: 1rem;
            padding: .8rem 3.2rem;
            box-shadow: 0 0 10px var(--primaryColor);
        }
    }
    .hero{
        display: none;
    }
    @media screen and (min-width:900px){
        .ham{
            display: none;
        }
        nav{
            display: flex;
            align-items: center;
            width: 60%;
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