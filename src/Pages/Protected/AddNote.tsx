import Navbar from "../../components/Dashboard/Navbar";
import NoteEditor from "../../components/Dashboard/AddNotes/NoteEditor";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { addNoteApi } from "../../api/axios";
import { useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddNote = () => {
  const [value,setValue] = useState("");
  const [title,setTitle] = useState("");
  const navigate = useNavigate()
  const {mutate,isPending} = useMutation({
    mutationFn: addNoteApi,
    onSuccess: () => {
      // toast("success",{position:"top-center"})
      navigate("/dashboard/allnotes")
    },
    onError: (error:any) => {
      if(error instanceof AxiosError){
        return toast(error.response?.data.msg,{position: "top-center"})
      }
      return toast(error?.message,{position: "top-center"})
    }
  })
  const addNote = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newNote = {title,category:"personal",noteBody:value}
    mutate(newNote);
  }
  
  return (
    <Wrapper>
        <Navbar page="Add New Note"/>
        {/* {isError && error && <p>{error.message}</p>}
        {isError && error instanceof AxiosError && <p>{error?.response?.data.msg}</p>} */}
        <form>
          <div className="top">
            <div className="inputDiv">
              <label htmlFor="title">Add title</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add Title"/>
            </div>
              <button onClick={addNote} disabled={isPending}>{isPending ? "Saving" : "Save"}</button>
          </div>
          <NoteEditor value={value} onChange={setValue}/>
        </form>
    </Wrapper>
  )
}

export default AddNote

const Wrapper = styled.div`
  form{
    padding-block: 2rem;
    width: min(var(--maxWidth2),90%);
    margin-inline: auto;
    min-height: 86vh;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  label{
    display: none;
  }
  .inputDiv{
    width: 75%;
  }
  input{
    border: 2px solid gray;
    background-color: transparent;
    outline: none;
    width: 100%;
    font-size: 2rem;
    padding: .5rem;
    border-radius: 0.5rem;
    caret-color: gray;
    color: var(--textColor);
  }
`