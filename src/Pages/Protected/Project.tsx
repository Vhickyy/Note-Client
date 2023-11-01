import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar";
import Filterform from "../../components/Dashboard/AllNotes/Filterform";
import { useState } from "react";
import CreateProjectModal from "../../components/Dashboard/Project/CreateProjectModal";
const projects:any[] = [
  // {
  //   title: "something",
  //   status: "in Progress",
  //   onSocket: false
  // },
  // {
  //   title: "something",
  //   status: "in Progress",
  //   onSocket: false
  // },
  // {
  //   title: "something",
  //   status: "in Progress",
  //   onSocket: false
  // },
  // {
  //   title: "something",
  //   status: "in Progress",
  //   onSocket: false
  // },
  // {
  //   title: "something",
  //   status: "in Progress",
  //   onSocket: true
  // },
  // {
  //   title: "something",
  //   status: "in Progress",
  //   onSocket: false
  // },
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
          projects.map((project,index)=>{
            return (
              <div className="card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.status}</p>
                <p>{project.onSocket === true ? "true" : "false"}, number of members,date and dealine, countdown, creator or collaborator </p>
              </div>
            )
          })
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Project

const Wrapper = styled.div`
background-color: whitesmoke;
min-height: 100vh;
.section{
  padding-block: 2rem;
  width: min(90%,var(--maxWidth));
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
    background-color: white;
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadowmd);
    height: 10rem;
  }
  @media screen and (min-width: 1000px){
    .card-wrapper{
      grid-template-columns: repeat(auto-fit,minmax(300px,auto));
    }
  }
`