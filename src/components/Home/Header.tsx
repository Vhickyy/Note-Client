import styled from "styled-components"
import hero from "../../assets/undrawhero.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
        {/* <div className="fixed-color"></div> */}
        <div className="section">
            <div>
                <h1>Secure your <span>notes</span></h1>
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

const Wrapper = styled.div`
width: min(var(--maxWidth),85%);
        margin-inline: auto;
        position: relative;
        z-index: 1;
    span{
        color: var(--primaryColor);
    }
    .section{
        padding-block: 4rem 5rem;
        text-align: center;
        
        h1{
            margin-bottom: 1.5rem;
            span{
                color: var(--primaryColor);
            }
        }
        p{
            margin-bottom: 1.5rem;
            max-width: 33rem;
            margin-inline: auto;
            
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
    .fixed-color{
        position: absolute;
        height: 15rem;
        width: 15rem;
        background-color: var(--primaryColor);
        filter: blur(7rem);
        /* border: 128px; */
        right: 0;
        z-index: -1;
    }
    @media screen and (min-width:900px){
        .section{
            padding-block: 3rem;
            text-align: start;
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 2rem;
            p{
                margin-inline: 0;
            }
        }
        .hero{
            display: block;
            /* width: 70%; */
            /* width: 25rem;
            height: 22rem; */
            width: 29%;
            height: 22rem;
            /* background-color: green; */
        }
    }
`