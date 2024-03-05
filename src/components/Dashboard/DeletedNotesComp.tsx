import { FaTrash } from "react-icons/fa";
import { CiSaveDown2} from "react-icons/ci"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NoteType } from "../../types/types";
import { clearAllNote, deleteSingleNote, getAllDeletedNotes, retrieveNoteApi } from "../../api/axios";
import Skeleton from "./Skeleton";
import { Wrapper } from "../../styles/CardWrapper";
import { useState } from "react";
const AllNotesComponenent = () => {
  const [id,setId] = useState("")

  const {data,isLoading:getLoading,isError:getError,error:getErrorDetail} = useQuery<NoteType[]>({queryKey: ["deleted-notes"],queryFn: getAllDeletedNotes})
  const queryClient = useQueryClient()
  const {mutate: retrieveMutate, isPending:isRetrievePending}  = useMutation({
    mutationFn:  retrieveNoteApi,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["deleted-notes"]})
    },
  })

  const {mutate: deleteMutate, isPending:isDeletePending}  = useMutation({
    mutationFn:  deleteSingleNote,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["deleted-notes"]})
    },
  })

  const {mutate:clearNoteMutate, isPending} = useMutation({
    mutationFn: clearAllNote,
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["deleted-notes"]})
    },
  })
  const retrieveNote = (id:string) => {
    setId(id)
    retrieveMutate(id)
  }
  const deleteNote = (id:string) => {
    setId(id)
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
  console.log(isPending,isDeletePending,isRetrievePending);
  
  return (
    <Wrapper>
      <button onClick={clearNotes} className="btn" disabled={isPending}>{isPending ? "Loading" : "Clear Notes"}</button>
      <div className="card-wrapper">
        {data?.map((i,index)=>{
          return(
            <div key={index} className="card">
              <div>
                <h4>{i.title}</h4>
                <div className="desc" dangerouslySetInnerHTML={{__html:i.noteBody}}/>
                <p>{i.category}</p>
              </div>
              <div className="flex">
                <button onClick={()=>deleteNote(i._id)} disabled={isDeletePending}>{isPending && i._id == id  ? <div className="loader"></div> : <FaTrash className="icon" />}</button>
                <button onClick={()=>retrieveNote(i._id)} disabled={isRetrievePending}>{isPending && i._id == id  ? <div className="loader"></div> : <CiSaveDown2 className="icon" />}</button>
                {/* <button onClick={()=>retrieveNote(i._id)}><CiSaveDown2 className="icon"/></button> */}
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default AllNotesComponenent

// const Wrapper = styled.div`
//   padding-block: 2rem;
//   width: min(var(--maxWidth2),90%);
//   margin-inline: auto;
//   button{
//     margin-bottom: 1rem;
//   }
//   p{
//     margin: 0;
//   }
//   margin-inline: auto;
//   .card-wrapper{
//     display: grid;
//     /* grid-template-columns: 1fr; */
//     grid-template-columns: repeat(auto-fill,minmax(300px,auto));
//     gap: 1.1rem;
//   }
//   .card{
//     background-color: var(--cardbg);
//     padding: 1rem;
//     border-radius: var(--borderRadius);
//     box-shadow: var(--shadowmd);
//     height: 10rem;
//   }
//   @media screen and (min-width: 1000px){
//     .card-wrapper{
//       /* grid-template-columns: 1fr 1fr; */
//       /* grid-template-columns: repeat(auto-fit,minmax(300px,auto)); */
//     }
//   }
// `
