import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar";
import Filterform from "../../components/Dashboard/AllNotes/Filterform";
import { useState } from "react";
import CreateProjectModal from "../../components/Dashboard/Project/CreateProjectModal";
import { Link } from "react-router-dom";
const projects:any[] = [
  {
    title: "something",
    status: "in Progress",
    onSocket: false
  },
  {
    title: "something",
    status: "in Progress",
    onSocket: false
  },
  {
    title: "something",
    status: "in Progress",
    onSocket: false
  },
  {
    title: "something",
    status: "in Progress",
    onSocket: false
  },
  {
    title: "something",
    status: "in Progress",
    onSocket: true
  },
  {
    title: "something",
    status: "in Progress",
    onSocket: false
  },
]
const Project = () => {
  const [sort,setSort] = useState({show:false,sort:"latest"});
    const [category,setCategory] = useState({show:false,category:"all"});
    const [showForm, setShowForm] = useState(false)
    const [showModal, setShowModal] =useState(false);
    const closeModal = () => {
      setShowModal(false)
    }
    const openModal = () =>{
      setShowModal(true)
    }
  return (
    <Wrapper>
      <Navbar page="Project"/>
        {showModal ? <CreateProjectModal closeModal={closeModal}/> : false}
        <div className="section">
        {projects.length ? <Filterform sort={sort} setSort={setSort} category={category} setCategory={setCategory} showForm={showForm} setShowForm={setShowForm}/> : null}
        <div className={!projects.length ? "main" : "card-wrapper"}>
          {!projects.length ? 
          <>
          <h3>You have no project, create new project.</h3>
          <button onClick={openModal}>Create Project</button>
          </> :
          <>
            <div className="card">
              <h5>Create New Project</h5>
              <button onClick={openModal}>New</button>
            </div>
            {projects.map((project,index)=>{
              return (
                <Link to={"./1"} key={index}>
                  <div className="card" >
                    <h3>{project.title}</h3>
                    <p>{project.status}</p>
                    <p>{project.onSocket === true ? "true" : "false"}, number of members,date and dealine, countdown, creator or collaborator </p>
                  </div>
                </Link>
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
a{
  color: black;
}
.section{
  padding-block: 2rem;
  width: 90%;
  margin-inline: auto;
}
.main{
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
  text-align: center;
}
.card-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,auto));
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
  @media screen and (min-width: 1000px){
    .card-wrapper{
      grid-template-columns: repeat(auto-fit,minmax(300px,auto));
    }
  }
`