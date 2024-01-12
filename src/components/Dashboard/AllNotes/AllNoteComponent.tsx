import styled from "styled-components";
// import data from "../../../data/fakedata";
import { useMutation, useQuery } from "@tanstack/react-query";
import {useState } from "react";
import Filterform from "./Filterform";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllNotes, removeNote } from "../../../api/axios";
import { NoteType } from "../../../types/types";
import Skeleton from "../Skeleton";
import { AxiosError } from "axios";
const AllNotesComponenent = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false);
    const [id,setId] = useState<string>("");

    const {data,isLoading,isError,error} = useQuery<NoteType[]>({queryKey: ["notes"],queryFn: getAllNotes});
    const {mutate,isPending}  = useMutation({
      mutationFn:  removeNote
    })

   const deletNote =(id:string)=>{
      setId(id)
      mutate(id)
    }
    if(isLoading){
      return <Skeleton/>
    }
    if(isError){
      if(error instanceof AxiosError){
        return <h2>{error?.response?.data.msg}!!!</h2>
      }
    }
  return (
    <Wrapper>
      <Filterform sort={sort} setSort={setSort} category={category} setCategory={setCategory} showForm={showForm} setShowForm={setShowForm}/>
      <div className="card-wrapper">
        {data?.length ? 
          data.map((i,index)=>{
            return(
              <div key={index} className="card">
                <Link to={`/dashboard/editnote/${i._id}`} >
                  <h4>{i.title}</h4>
                  <p>{i.noteBody}</p>
                  <p>{i.category}</p>
                </Link>
                  <div>
                    <Link to={"../editnote/1"}><FaEdit className="icon"/></Link>
                    <button onClick={()=>deletNote(i._id)} disabled={isPending}>{isPending && i._id == id  ? "Loading..." : <FaTrash className="icon" />}</button>
                  </div>
              </div>
            )
          }) : 
          <div>
            <h2>You have not created any note.</h2>
            <Link to={"../addnote"}><button>Create Note</button></Link>
          </div>}
      </div>
    </Wrapper>
  )
}


export default AllNotesComponenent

const Wrapper = styled.main`
  padding-block: 2rem;
  width: 90%;
  margin-inline: auto;
  p{
    margin: 0;
  }
  .card-wrapper{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }
  .card{
    background-color: var(--backgroundColor); 
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadowmd);
    height: 10rem;
    a{
      color: var(--textColor);
    }
  }
  @media screen and (min-width: 1000px){
    .card-wrapper{
      grid-template-columns: 1fr 1fr;
    }
  }
`


