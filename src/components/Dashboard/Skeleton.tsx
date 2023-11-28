import styled from "styled-components"

const Skeleton = () => {
  return (
    <Wrapper>
        <div className="card-wrapper">
            {[1,2,3,4,5,6,7,8,9].map((_,index)=>{
            return(
                <div key={index} className="card">
                <div className="title"></div>
                <h4></h4>
                <p></p>
                <p></p>
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
    height: 1rem;
  }
`