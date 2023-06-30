import styled from "styled-components"
import data from "../../../fakedata"
import { useSearchParams } from "react-router-dom"
const AllNotesComponenent = () => {
  const [search,setSearch] = useSearchParams("all");
  const category = new URLSearchParams(search).get("category");
  const newdata = data.filter(i=>{
    if(category==="all")return i;
    return i.category === category;
  })
  // let getData : any;
 // const getit = () =>   {
 //   let getData = data;
  //  if(category === "all"){
    //  return
 //   } else{
    //  getData.filter(i=>i.category)
 //   }
//  }
  
  return (
    <Wrapper>
      <form>
        <div>
           <label htmlFor="category">Filter</label>
          <select name="category" id="category" onChange={(e)=>{setSearch({category: e.target.value});
          }}>
            <option value="all">All</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="school">School</option>
          </select>
        </div>
      </form>
      <div className="card-wrapper">
        {newdata.map((i,index)=>{
          return(
            <div key={index} className="card">
              <h4>{i.title}</h4>
              <p>{i.content}</p>
              <p>{i.category}</p>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}


export default AllNotesComponenent

const Wrapper = styled.main`
  margin-block: 2rem;
  width: min(90%,var(--maxWidth));
  p{
    margin: 0;
  }
  margin-inline: auto;
  .card-wrapper{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.3rem;
  }
  .card{
    background-color: var(--primaryColor20);
    /* background-color: white; */
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadowmd);
    height: 10rem;
  }
  @media screen and (min-width: 900px){
    .card-wrapper{
      grid-template-columns: repeat(3,1fr);
    }
  }
`
