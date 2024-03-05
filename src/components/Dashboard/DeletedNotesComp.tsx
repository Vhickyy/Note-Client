import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NoteType } from "../../types/types";
import { clearAllNote, deleteSingleNote, getAllDeletedNotes, retrieveNoteApi } from "../../api/axios";
import Skeleton from "./Skeleton";
const AllNotesComponenent = () => {

  const {data,isLoading:getLoading,isError:getError,error:getErrorDetail} = useQuery<NoteType[]>({queryKey: ["deleted-notes"],queryFn: getAllDeletedNotes})
  const queryClient = useQueryClient()
  const {mutate: retrieveMutate}  = useMutation({
    mutationFn:  retrieveNoteApi,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["deleted-notes"]})
    },
  })

  const {mutate: deleteMutate}  = useMutation({
    mutationFn:  deleteSingleNote,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["deleted-notes"]})
    },
  })

  const {mutate:clearNoteMutate} = useMutation({
    mutationFn: clearAllNote,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["deleted-notes"]})
    },
  })
  const retrieveNote = (id:string) => {
    retrieveMutate(id)
  }
  const deleteNote = (id:string) => {
    deleteMutate(id)
  }
  const clearNotes = () => {
    clearNoteMutate()
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
              <p dangerouslySetInnerHTML={{__html:i.noteBody}}></p>
              <p>{i.category}</p>
              <div>
                <FaTrash onClick={()=>deleteNote(i._id)}/>
                <button onClick={()=>retrieveNote(i._id)}>Retrieve</button>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default AllNotesComponenent

const Wrapper = styled.div`
  padding-block: 2rem;
  width: min(var(--maxWidth2),90%);
  margin-inline: auto;
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
    grid-template-columns: repeat(auto-fill,minmax(300px,auto));
    gap: 1.1rem;
  }
  .card{
    background-color: var(--cardbg);
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadowmd);
    height: 10rem;
  }
  @media screen and (min-width: 1000px){
    .card-wrapper{
      /* grid-template-columns: 1fr 1fr; */
      /* grid-template-columns: repeat(auto-fit,minmax(300px,auto)); */
    }
  }
`
