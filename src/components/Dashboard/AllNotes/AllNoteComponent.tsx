import styled from "styled-components";
// import data from "../../../data/fakedata";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Filterform from "./Filterform";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteSingleNote, getAllNotes } from "../../../api/axios";
import { NoteType } from "../../../types/types";
import Skeleton from "../Skeleton";
const AllNotesComponenent = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false);

    const {data,isLoading,error} = useQuery<NoteType[]>({queryKey: ["notes"],queryFn: getAllNotes})
    const {mutate}  = useMutation({
      mutationFn:  deleteSingleNote
    })

   const deletNote =(id:string)=>{
      mutate(id)
    }
    if(isLoading){
      return <Skeleton/>
    }
    if(error){
      return <h2>{error.message}</h2>
    }
  return (
    <Wrapper>
      <Filterform sort={sort} setSort={setSort} category={category} setCategory={setCategory} showForm={showForm} setShowForm={setShowForm}/>
      <div className="card-wrapper">
        {data?.length ? 
          data.map((i,index)=>{
            return(
              <div key={index} className="card">
                <h4>{i.title}</h4>
                <p>{i.noteBody}</p>
                <p>{i.category}</p>
                <div>
                  <Link to={"../editnote/1"}><FaEdit/></Link>
                  <FaTrash onClick={()=>deletNote("1")}/>
                </div>
              </div>
            )
          }) : 
          <div>
            <h2>You have not created any note.</h2>
            <button>Create Note.</button>
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
    /* grid-template-columns: 1fr; */
    grid-template-columns: repeat(auto-fit,minmax(250px,auto));
    gap: 1.1rem;
  }
  .card{
    background-color: white;
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


