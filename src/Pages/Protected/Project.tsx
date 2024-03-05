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
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const Project = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false)
    const [showModal, setShowModal] =useState(false);
    const [addUserModal, setAddUserModal] =useState({open:false,title:"",projectId:""});
    const [project,setProject] = useState<ProjectType>()
    const {user} = useAuth()
    const [editProjectBool,setEditProjectBool] = useState(false)
    const closeModal = (e:React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setShowModal(false)
      setEditProjectBool(false)
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

    const editProject = (e:React.MouseEvent<HTMLButtonElement>,project: ProjectType) => {
      e.preventDefault()
      console.log(project);
      setEditProjectBool(true)
      openModal()
      setProject(project)
    }
  return (
    <Wrapper>
      <Navbar page="Project"/>
        <div className="section">
        {showModal && editProjectBool ? <CreateProjectModal closeModal={closeModal} project={project} setEditProjectBool={setEditProjectBool} editProjectBool={editProjectBool}/> : showModal ? <CreateProjectModal closeModal={closeModal}/> : null }
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
              <button onClick={openModal} className="btn">New</button>
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
                        <div className="flex">
                          <button onClick={(e) => editProject(e,project)}><FaEdit className="icon"/></button>
                          <button onClick={(e)=>deleteProject(e,project._id)}><FaTrash className="icon"/></button>
                          {/* show number of collaborators */}
                          <div className="lastDiv">
                            <span>{project.members.length}</span>
                            <button onClick={(e) => addCollaborator(e,project.title,project._id)} ><MdPeople className="icon" /></button>
                          </div>
                        </div>
                        </div>: <><p>Collaborator</p><div>{project.members.length}<MdPeople className="icon" /></div></>}
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
  width: min(var(--maxWidth2),90%);
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
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    gap: 1.1rem;
  }
  .card{
    background-color: var(--secondaryColor);
    padding: 1rem;
    border-radius: .5rem;
    box-shadow: var(--shadowmd);
    height: 10rem;
    color: var(--textColor);
  }
  /* .add{
    background-color: transparent;
    color: var(--primaryColor);
    border: 1px solid var(--primaryColor);
  } */
  button{
    background-color: transparent;
    padding: 0;
    color: var(--textColor);
  }
  .btn{
    background-color: var(--primaryColor);
    padding: 1rem;
  }
  .icon{
    color: var(--textColor);
  }
  .flex{
    display: flex;
    justify-content: end;
    gap: .5rem;
  }
  .lastDiv{
    position: relative;
  }
  span{
    background-color: var(--primaryColor);
    height: 1.1rem;
    width: 1.1rem;
    display: grid;
    place-items: center;
    /* padding: .3rem; */
    font-size: 12px;
    border-radius: 100%;
    color: white;
    position: absolute;
    top: -.5rem;
    right: -.5rem;
  }
  @media screen and (min-width: 1000px){
    /* .card-wrapper{
      grid-template-columns: 1fr 1fr;
    } */
  }
`