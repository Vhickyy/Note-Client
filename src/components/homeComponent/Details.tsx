import styled from "styled-components";
const Details = () => {
  return (
    <Wrapper>
        <h2>Featured</h2>
        <div className="underline"></div>
        <div className="section">
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
        </div>
    </Wrapper>
  )
}

export default Details;

const Wrapper = styled.section`
    width: min(var(--maxWidth),90%);
    margin-inline: auto;
    text-align: center;
    padding-block-start: 4rem;
    .section{
        padding-top: 3.5rem;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(18rem,1fr));
    }
    .circle{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--primaryColor40);
        margin-bottom: 1rem;
    }
    .feature-card{
        background-color: var(--primaryColor20);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem 1rem;
        border-radius: 0.35rem;
        height: 20rem;
    }
`