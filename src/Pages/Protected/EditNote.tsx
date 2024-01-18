import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import NoteEditor from '../../components/Dashboard/AddNotes/NoteEditor'
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NoteType } from "../../types/types";
import { getNote, updateNote } from "../../api/axios";
import { useEffect, useState } from "react";

const EditNote = () => {
  const {id} = useParams()
  const [value,setValue] = useState('');
  const navigate = useNavigate();
  
  const {data,isLoading,error} = useQuery<NoteType>({queryKey: ["note",id],queryFn:()=> getNote(id)});
  const {mutate,isPending} = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      navigate("/dashboard/allnotes")
    }
  })
  // const newnote = {
  //   title: "jj",
  //   desc: "jj"
  // }
  const handleEdit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(value);
    mutate({id,note:{title:"New Title",noteBody:value}})
  }
  useEffect(()=>{
    if(data){
      setValue(data?.noteBody)
    }
  },[data])
  
  return (
    <Wrapper>
        <Navbar page="Edit Note"/>
        {isLoading && <h1>Loading</h1>}
        {error && <h2>{error.message}!!!</h2>}
        {data && <form >
          <div className="top">
            <h4>Title</h4>
            <button onClick={handleEdit} disabled={isPending}>{isPending ? "Saving..." : "Save Change"}</button>
          </div>
          <NoteEditor value={value} onChange={setValue}/>
        </form>}
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