// import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"

type CreateProject = {
    closeModal: ()=>void
}
const CreateProjectModal = ({closeModal}:CreateProject) => {
    // const [users,setUsers] = useState([])
  return (
    <Wrapper>
        <form className="content">
            <div className="head">
                <h4>New Project</h4>
                <FaTimes className="icon" onClick={closeModal}/>
            </div>
            <div>
                <h5>Project Name</h5>
                <input type="text" placeholder="project name"/>
                <h5>Add User, min 1, max 2</h5>
                <input type="text" placeholder="find users"/>
                {/* map added  users here and remove user too and add user task */}
                <h5>Date for completion</h5>
                <input type="text" placeholder="enter date" />
            </div>
            <div>
                <button>Discard</button>
                <button>Create</button>
            </div>
        </form>
    </Wrapper>
  )
}

export default CreateProjectModal

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    background-color: #f5f5f599;
    display: grid;
    place-items: center;
    .content{
        background-color: white;
        width: min(90%,40rem);
        padding: 2rem;
        display: grid;
        gap: 1rem;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
`