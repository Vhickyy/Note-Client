import styled from "styled-components";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <Wrapper>
        <div className="main">
            <h2>Featured</h2>
            <div className="underline"></div>
            <motion.div className="section">
                <div className="feature-card">
                    <div className="circle"></div>
                    <h4>Article</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, incidunt.</p>
                    <button>explore</button>
                </div>
                <div className="feature-card">
                    <div className="circle"></div>
                    <h4>Article</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, incidunt.</p>
                    <button>explore</button>
                </div>
                <div className="feature-card">
                    <div className="circle"></div>
                    <h4>Article</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, incidunt.</p>
                    <button>explore</button>
                </div>
            </motion.div>
        </div>
    </Wrapper>
  )
}

export default Details;

const Wrapper = styled.section`
    padding-block: 4.5rem;
    background-color: #ffffff;
    .main{
        width: min(var(--maxWidth),80%);
        margin-inline: auto;
        text-align: center;
    }
    .section{
        padding-top: 3.5rem;
        display: grid;
        gap: 1.2rem;
        grid-template-columns: repeat(auto-fill, minmax(18rem,1fr));
        h4{
            margin: 0;
        }
        p{
            margin: 0;
        }
    }
    .circle{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--primaryColor40);
        /* margin-bottom: 1rem; */
    }
    .feature-card{
        background-color: var(--primaryColor20);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem 1rem;
        border-radius: 0.35rem;
        box-shadow: var(--shadowmd);
        border-bottom: .4rem solid var(--primaryColor);
        gap: 1rem;
    }
    @media screen and (min-width: 673px) {
        .main{
            width: min(var(--maxWidth),90%);
        }   
    }
`