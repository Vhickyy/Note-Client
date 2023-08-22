import styled from "styled-components";
import data from "../../../data/fakedata";
import { useState } from "react";

import Filterform from "./Filterform";
const AllNotesComponenent = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false)
  return (
    <Wrapper>
      <Filterform sort={sort} setSort={setSort} category={category} setCategory={setCategory} showForm={showForm} setShowForm={setShowForm}/>
      <div className="card-wrapper">
        {data.map((i,index)=>{
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
    gap: 1.1rem;
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
