import Navbar from "../../components/Dashboard/Navbar";
import NoteEditor from "../../components/Dashboard/AddNotes/NoteEditor";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { addNoteApi } from "../../api/axios";
import { useState } from "react";
const AddNote = () => {
  const [value,setValue] = useState("")
  // const Edit: boolean = false
  const {mutate} = useMutation({
    mutationFn: addNoteApi
  })
  const addNote = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,note:{title:string,category:string,noteBody:string}) => {
    e.preventDefault()
    mutate(note)
    console.log(note);
  }
  return (
    <Wrapper>
        <Navbar page="Add New Note"/>
        {/* <h1>add note</h1> */}
        <form>
          <div className="top">
            <h4>Title</h4>
            <button onClick={(e)=>addNote(e,{title:"firdt note from frontend",category:"personal",noteBody:value})}>Save</button>
          </div>
          <NoteEditor value={value} setValue={setValue}/>
        </form>
    </Wrapper>
  )
}

export default AddNote

const Wrapper = styled.div`
  form{
    padding-block: 2rem;
    width: 90%;
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