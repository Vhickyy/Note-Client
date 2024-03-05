import styled from "styled-components";
// import data from "../../../data/fakedata";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {useState } from "react";
import Filterform from "./Filterform";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllNotes, removeNote } from "../../../api/axios";
import { NoteType } from "../../../types/types";
import Skeleton from "../Skeleton";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
const AllNotesComponenent = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false);
    const [id,setId] = useState<string>("");

    const {data,isLoading,isError,error} = useQuery<NoteType[]>({queryKey: ["notes"],queryFn: getAllNotes});
    const queryClient = useQueryClient()
    const {mutate,isPending}  = useMutation({
      mutationFn:  removeNote,
      onSuccess:() => {
        queryClient.invalidateQueries({queryKey:["notes"]})
        return toast("Deleted Note Successfully",{position:"top-center"})
      },
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
                {/* <Link to={`/dashboard/editnote/${i._id}`} > */}
                <div>
                  <h4>{i.title}</h4>
                  {/* <div className="desc">
                    
                  <p className="desc" dangerouslySetInnerHTML={{__html:i.noteBody}}></p>
                  </div> */}
                  <div className="desc" dangerouslySetInnerHTML={{__html:i.noteBody}}/>
                  <p>{i.category}</p>
                </div>
                {/* </Link> */}
                  <div className="flex">
                    <Link to={`../editnote/${i._id}`}><FaEdit className="icon"/></Link>
                    <button onClick={()=>deletNote(i._id)} disabled={isPending}>{isPending && i._id == id  ? "Loading..." : <FaTrash className="icon" />}</button>
                  </div>
              </div>
            )
          }) : 
          <div >
            <h2>You have not created any note.</h2>
            <Link to={"../addnote"}><button>Create Note</button></Link>
          </div>}
      </div>
    </Wrapper>
  )
}


export default AllNotesComponenent

const Wrapper = styled.div`
  padding-block: 2rem;
  width: min(var(--maxWidth2),90%);
  margin-inline: auto;
  h4{
    color: var(--primaryColor);
  }
  p{
    margin: 0;
    font-size: 1.2rem;
  }
  .desc{
    h1,h2,h3,h4,h5,h6{
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
  .card-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    gap: 1.1rem;
  }
  .card{
    background-color: var(--cardbg); 
    padding: 1.5rem 1rem;
    border-radius: .5rem;
    box-shadow: var(--shadowmd);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* height: 10rem; */
    a{
      color: var(--textColor);
    }
    .flex{
      /* background-color: red; */
      display: flex;
      gap: .5rem;
      justify-content: flex-end;
    }
  }
  button{
    background-color: transparent;
    padding: 0;
  }
  .icon{
    color: var(--textColor);
  }
  
  @media screen and (min-width: 1000px){
    .card-wrapper{
      /* grid-template-columns: 1fr 1fr; */
    }
  }
`


