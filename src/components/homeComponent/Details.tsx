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
    padding-block: 5rem;
    .section{
        padding-top: 3rem;
        /* display: flex;
        flex-wrap: wrap; */
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18rem,1fr));
    }
    .circle{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--primaryColor40);
    }
    .feature-card{
        /* width: 20rem; */
        /* flex: 1 1 20rem; */
        background-color: var(--primaryColor20);
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem 1rem;
        border-radius: 0.35rem;
    }
`