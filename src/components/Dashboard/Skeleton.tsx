import styled from "styled-components"

const Skeleton = () => {
  return (
    <Wrapper>
        <div className="card-wrapper">
            {[1,2,3,4,5,6,7,8,9].map((_,index)=>{
            return(
                <div key={index} className="card">
                  <div className="title skeleton"></div>
                  <div className="title skeleton"></div>
                  
                  <div>
                      <div></div>
                  </div>
                </div>
            )
            })}
        </div>
    </Wrapper>
  )
}

export default Skeleton

const Wrapper = styled.div`
  padding-block: 2rem;
  width: 90%;
  margin-inline: auto;
  height: 86vh;
  overflow: hidden;
  .card-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,auto));
    gap: 1.1rem;
  }
  .card{
    background-color: var(--backgroundColor);
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadowmd);
    height: 10rem;
  }
  .title{
    background-color: var(--secondaryColor);
    width: 90%;
    height: .5rem;
    border-radius: .125rem;
    margin-bottom:.2rem;
  }
  .skeleton{
    opacity: .7;
    animation: skeleton 1s linear infinite alternate;
  }
  @keyframes skeleton {
    0%{
      background-color: var(--secondaryColor);
    }
    100%{
      background-color: hsl(20, 24%, 25%);
    }
  }
`