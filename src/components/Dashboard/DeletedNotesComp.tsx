import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { NoteType } from "../../types/types";
import { getAllDeletedNotes } from "../../api/axios";
import Skeleton from "./Skeleton";
const AllNotesComponenent = () => {

  const {data,isLoading:getLoading,isError:getError,error:getErrorDetail} = useQuery<NoteType[]>({queryKey: ["notes"],queryFn: getAllDeletedNotes})
  const retrieveNote = (id:string) => {
    console.log(id)
  }
  const deleteNote = (id:string) => {
    console.log(id)
  }
  const clearNotes = () => {
    console.log("clear")
  }

  if(getLoading){
    return <Skeleton/>
  }
  if(getError){
    // console.log(error);
    return <h2>{getErrorDetail.message}!!!</h2>
  }
  return (
    <Wrapper>
      <button onClick={clearNotes}>Clear All</button>
      <div className="card-wrapper">
        {data?.map((i,index)=>{
          return(
            <div key={index} className="card">
              <h4>{i.title}</h4>
              <p>{i.noteBody}</p>
              <p>{i.category}</p>
              <div>
                <FaTrash onClick={()=>deleteNote("1")}/>
                <button onClick={()=>retrieveNote("1")}>Retrieve</button>
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
  /* width: min(90%,var(--maxWidth)); */
  width: 90%;
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
    background-color: var(--backgroundColor);
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
