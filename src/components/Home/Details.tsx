import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Details = () => {
  return (
    <Wrapper>
    <div className="upper">
        <p>75+</p>
        <p>75+</p>
        <p>75+</p>
    </div>
    <div>
        <h2>Featured</h2>
        <div className="underline"></div>
        <div className="relative">
            <div className="absolute"></div>
            <div className="main">
                <motion.div className="section">
                    <div className="feature-card">
                        <div className="circle"></div>
                        <h4>Article</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <Link to={"#"}>Learn More<FaAngleRight/></Link>
                    </div>
                    <div className="feature-card">
                        <div className="circle"></div>
                        <h4>Article</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <Link to={"#"}>Learn More<FaAngleRight/></Link>
                    </div>
                    <div className="feature-card">
                        <div className="circle"></div>
                        <h4>Article</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <Link to={"#"}>Learn More<FaAngleRight/></Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default Details;

const Wrapper = styled.section`
    padding-bottom: 4.5rem;
    margin-top: 3rem;
    text-align: center;
    .upper{
        width: min(1200px,85%);
        margin-inline: auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 4.5rem;
        font-size: 4rem;
        font-weight: 600;
        color: var(--primaryColor);
    }
    .main{
        /* position: relative; */
        width: min(1200px,85%);
        margin-inline: auto;
        text-align: center;
    }
    .relative{
        max-width: var(--maxWidth);
        margin-inline: auto;
        position: relative;
        margin-top: 2rem;
    }
    .absolute{
        height: 100%;
        width: 50%;
        position: absolute;
        background-color: #d6824d99;
        border-radius: 0 2rem 2rem 0;
        top: 2rem;
        z-index: -1;
        left: -7rem;
    }
    .section{
        padding-top: 4rem;
        display: grid;
        gap: 1.2rem;
        grid-template-columns: repeat(auto-fill, minmax(14.5rem,1fr));
    }
    .circle{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--primaryColor40);
        /* margin-bottom: 1rem; */
    }
    .feature-card{
        background-color: var(--backgroundColor);
        /* color: white; */
        border: 2px solid var(--primaryColor);
        /* border: 2px solid whitesmoke; */
        color: var(--textColor);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem 1rem;
        border-radius: 0.35rem;
        box-shadow: var(--shadowmd);
        border-bottom: .4rem solid var(--primaryColor);
        gap: 1.2rem;
    }
    a{
        display: flex;
        align-items: center;
        gap: .5rem;
        color: var(--primaryColor);
        transition: hover .2s linear;
    }
    a:hover{
        gap: 1rem;
    }
    @media screen and (min-width: 1100px) {
        .section{
            /* display: flex;
            justify-content: space-between; */
            grid-template-columns: repeat(3,1fr);
        }   
    }
    @media screen and (min-width: 1140px) {
        .absolute{
            left: 0;
        }
    }
`
