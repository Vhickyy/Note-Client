import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import NoteEditor from '../../components/Dashboard/AddNotes/NoteEditor'
import { useParams } from "react-router-dom"
// import { useAuth } from "../../context/AuthContext"
import { useMutation, useQuery } from "@tanstack/react-query"
import { NoteType } from "../../types/types"
import { getNote, updateNote } from "../../api/axios"
import { useState } from "react"
// import { useMutation } from "@tanstack/react-query"
// import { updateNote } from "../../api/axios"

const EditNote = () => {
  const {id} = useParams()
  const [value,setValue] = useState('');
  // const editingNote = () => {
  //   setValue()
  // }
  
  const {data,isLoading,error} = useQuery<NoteType>({queryKey: ["note",id],queryFn:()=> getNote(id)});
  const {mutate} = useMutation({
    mutationFn: updateNote
  })
  // const newnote = {
  //   title: "jj",
  //   desc: "jj"
  // }
  const handleChange = (e:any) => {
    setValue(e.target.value)
  }
  const handleEdit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    mutate({id,note:value})
  }
  
  return (
    <Wrapper>
        <Navbar page="Edit Note"/>
        {isLoading && <h1>Loading</h1>}
        {error && <h2>{error.message}!!!</h2>}
        <form>
          <div className="top">
            <h4>Title</h4>
            <button onClick={handleEdit}>Save Change</button>
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