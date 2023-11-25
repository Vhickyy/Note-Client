import styled from "styled-components"

const Pricing = () => {
  return (
    <Wrapper>
      <h2>Pricing</h2>
      <section>
        <h5>Our plans are flexible</h5>
        <div className="price-wrapper">
          <div className="price-card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="price-card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="price-card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Pricing

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 7rem;
  section{
    padding-top: 4rem;
    width: min(var(--maxWidth),85%);
    margin-inline: auto;
    text-align: center;
  }
  .price-wrapper{
    /* width: 100%; */
    display: grid;
    gap: 1rem;
    /* justify-content: space-between; */
  }
  .price-card{
    background-color: #d6824d99;
    padding: 2rem 1rem;
    border-radius: 1rem;
    height: 20rem;
  }
  @media screen and (min-width: 800px) {
    .price-wrapper{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`