import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar";
import Filterform from "../../components/Dashboard/AllNotes/Filterform";
import { useState } from "react";
import CreateProjectModal from "../../components/Dashboard/Project/CreateProjectModal";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi, getAllProjects } from "../../api/axios";
import { ProjectType } from "../../types/types";
import Skeleton from "../../components/Dashboard/Skeleton";
import { useAuth } from "../../context/AuthContext";
import AddUserModal from "../../components/Dashboard/Project/AddUserModal";
import React from "react";

const Project = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false)
    const [showModal, setShowModal] =useState(false);
    const [addUserModal, setAddUserModal] =useState({open:false,title:"",projectId:""});
    const {user} = useAuth()
    const closeModal = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setShowModal(false)
    }
    const openModal = () =>{
      setShowModal(true)
    }
    const {data,isLoading,error} = useQuery<ProjectType[]>({queryKey: ["projects"],queryFn: getAllProjects});
    const queryClient = useQueryClient()
    const {mutate}  = useMutation({
      mutationFn:  deleteProjectApi,
      onSuccess:() => {
        queryClient.invalidateQueries({queryKey:["projects"]})
      },
    })

   const deleteProject =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string)=>{
    e.preventDefault()
      mutate(id)
    }

    if(isLoading){
      return <Skeleton/>
    }
    if(error){
      // console.log(error);
      return <h2>{error.message}!!!</h2>
    }
    const addCollaborator = (e:React.MouseEvent<HTMLButtonElement>,title: string,projectId: string) => {
      e.preventDefault();
      setAddUserModal({open:true,title,projectId})
    }
  return (
    <Wrapper>
      <Navbar page="Project"/>
        <div className="section">
        {showModal ? <CreateProjectModal closeModal={closeModal}/> : false}
        {data?.length ? <Filterform sort={sort} setSort={setSort} category={category} setCategory={setCategory} showForm={showForm} setShowForm={setShowForm}/> : null}
        <div className={!data?.length ? "main" : "card-wrapper"}>
          {!data?.length ? 
          <>
          <h3>You have no project, create new project.</h3>
          <button onClick={openModal}>Create Project</button>
          </> :
          <>
            <div className="card">
              <h5>Create New Project</h5>
              <button onClick={openModal}>New</button>
            </div>
            {data?.map((project,index)=>{
              return (
                <React.Fragment key={index}>
                  <div className="card">
                    <Link to={`./${project._id}`} >
                      <h3>{project.title}</h3>
                      <p>{project.brief}</p>
                      {/* <p>{project.onSocket === true ? "true" : "false"}, number of members,date and dealine, countdown, creator or collaborator </p> */}
                      {project.owner === user?.id ? <div>
                        <p>Owner</p>
                        <button onClick={(e)=>deleteProject(e,project._id)}>Delete</button>
                        {/* show number of collaborators */}
                        <button onClick={(e) => addCollaborator(e,project.title,project._id)} className="add">View Collaborator</button>
                        </div>: <p>Collaborator</p>}
                    </Link>
                  {addUserModal.open ? <AddUserModal addUserModal={addUserModal} setAddUserModal={setAddUserModal} /> : false}
                  </div>
                </React.Fragment>
              )
            })}
          </>
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Project

const Wrapper = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: auto 1fr;
a{
  color: var(--textColor);
}
.section{
  padding-block: 2rem;
  width: 90%;
  margin-inline: auto;
}
.main{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
  text-align: center;
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
    color: var(--textColor);
  }
  .add{
    background-color: transparent;
    color: var(--primaryColor);
    border: 1px solid var(--primaryColor);
  }
  @media screen and (min-width: 1000px){
    .card-wrapper{
      grid-template-columns: 1fr 1fr;
    }
  }
`