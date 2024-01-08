import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import NoteEditor from '../../components/Dashboard/AddNotes/NoteEditor'
// import { useState } from "react"
import { useParams } from "react-router-dom"
// import { useAuth } from "../../context/AuthContext"
import { useQuery } from "@tanstack/react-query"
import { NoteType } from "../../types/types"
import { getNote } from "../../api/axios"
import { useState } from "react"
// import { useMutation } from "@tanstack/react-query"
// import { updateNote } from "../../api/axios"

const EditNote = () => {
  const {id} = useParams()
  const [_value,setValue] = useState('');
  // const editingNote = () => {
  //   setValue()
  // }
  
  const {data,isLoading,error} = useQuery<NoteType>({queryKey: ["note",id],queryFn:()=> getNote(id)});
  
  // const [value,setValue] = useState(note)
  // const {mutate} = useMutation({
  //   mutationFn: updateNote
  // })
  // const newnote = {
  //   title: "jj",
  //   desc: "jj"
  // }
  const handleChange = (e:any) => {
    setValue(e.target.value)
  }
  if(isLoading){
    return <h1>loading</h1>
  }
  if(error){
    // console.log(error);
    return <h2>{error.message}!!!</h2>
  }
  return (
    <Wrapper>
        <Navbar page="Edit Note"/>
        <form>
          <div className="top">
            <h4>Title</h4>
            <button>Save Change</button>
          </div>
          {data ? <NoteEditor value={data.noteBody} setValue={handleChange}/> : null}
        </form>
    </Wrapper>
  )
}

export default EditNote;

const Wrapper = styled.div`
  background-color: var(--bgColor);
  color: var(--textColor);
  form{
    padding-block: 2rem;
    width: min(90%,var(--maxWidth));
    margin-inline: auto;
    min-height: 86vh;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
`