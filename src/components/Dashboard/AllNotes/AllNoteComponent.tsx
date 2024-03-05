
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
import { Wrapper } from "../../../styles/CardWrapper";
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
                <div>
                  <h4>{i.title}</h4>
                  <div className="desc" dangerouslySetInnerHTML={{__html:i.noteBody}}/>
                  <p>{i.category}</p>
                </div>
                  <div className="flex">
                    <Link to={`../editnote/${i._id}`}><FaEdit className="icon"/></Link>
                    <button onClick={()=>deletNote(i._id)} disabled={isPending}>{isPending && i._id == id  ? <div className="loader"></div> : <FaTrash className="icon" />}</button>
                  </div>
              </div>
            )
          }) : 
          <div >
            <h2>You have not created any note.</h2>
            <Link to={"../addnote"}><button className="btn">Create Note</button></Link>
          </div>}
      </div>
    </Wrapper>
  )
}


export default AllNotesComponenent




