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
            <div className="body">
                <div className="inputs">
                    <h5>Project Name</h5>
                    <input type="text" placeholder="project name"/>
                </div>
                <div className="inputs">
                    <h5>Project Brief</h5>
                    <textarea name="" id=""></textarea>
                </div>
                <div className="inputs">
                    <h5>Add User, min 1, max 2</h5>
                    <input type="text" placeholder="find users"/>
                </div>
                {/* map added  users here and remove user too and add user task */}
                <div className="inputs">
                    <h5>Date for completion</h5>
                    <input type="text" placeholder="enter date" />
                </div>
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
    z-index: 100;
    .content{
        background-color: white;
        width: min(90%,var(--fixedWidth));
        padding: 2rem;
        display: grid;
        gap: 2rem;
        box-shadow: var(--shadowlg);
        border-radius: .5rem;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
    .body{
        display: grid;
        gap: 1.1rem;
    }
    /* .inputs{
        display: grid;
    } */
    input,textarea{
        width: 100%;
        margin-top: 0.5rem;
        border: 1px solid gray;
        border-radius: 0.5rem;
    }
    input{
        padding: .5rem;
    }
    textarea{
        height: 7rem;
    }
`