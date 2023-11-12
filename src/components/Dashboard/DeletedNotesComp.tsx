import styled from "styled-components";
import data from "../../data/fakedata";
import { FaTrash } from "react-icons/fa";
const AllNotesComponenent = () => {
  return (
    <Wrapper>
      <button>Clear All</button>
      <div className="card-wrapper">
        {data.map((i,index)=>{
          return(
            <div key={index} className="card">
              <h4>{i.title}</h4>
              <p>{i.content}</p>
              <p>{i.category}</p>
              <div>
                <FaTrash/>
                <button>Retrieve</button>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}


export default AllNotesComponenent

const Wrapper = styled.main`
  padding-block: 2rem;
  width: min(90%,var(--maxWidth));
  button{
    margin-bottom: 1rem;
  }
  p{
    margin: 0;
  }
  margin-inline: auto;
  .card-wrapper{
    display: grid;
    /* grid-template-columns: 1fr; */
    grid-template-columns: repeat(auto-fit,minmax(250px,auto));
    gap: 1.1rem;
  }
  .card{
    background-color: white;
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadowmd);
    height: 10rem;
  }
  @media screen and (min-width: 1000px){
    .card-wrapper{
      /* grid-template-columns: 1fr 1fr; */
      grid-template-columns: repeat(auto-fit,minmax(300px,auto));
    }
  }
`
