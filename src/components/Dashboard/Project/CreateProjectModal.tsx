import { useMutation,  useQueryClient } from "@tanstack/react-query"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"
import { createProjectApi } from "../../../api/axios"
import ModalWrapper from "../../ModalWrapper"
import { ProjectType } from "../../../types/types"
import { Dispatch, SetStateAction } from "react"

type CreateProject = {
    closeModal: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void
    project?: ProjectType
    editProjectBool?: Boolean,
    // setProject: 
    setEditProjectBool?: Dispatch<SetStateAction<boolean>>
}

const CreateProjectModal = ({closeModal,project,editProjectBool,setEditProjectBool}:CreateProject) => {
    console.log(editProjectBool);
    
    const queryClient = useQueryClient();

    const {mutateAsync,isPending} = useMutation({
        mutationFn: createProjectApi,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["projects"]})
        },
      })
    const createNewProject = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const projectData:{title:string,brief:string} = Object.fromEntries(formData) as {title:string,brief:string};
        // const newProject = {title:"new project",brief:"summary of project",dueDate:new Date(Date.now() + 40000).toString()};
        const newProject = {...projectData,dueDate:new Date(Date.now() + 40000).toString()};
        await mutateAsync(newProject);
        if(editProjectBool){
            setEditProjectBool!(false)
        }
        closeModal(e)
      }

  return (
    <ModalWrapper>
    <Wrapper onSubmit={createNewProject}>
        {/* <form className="content"> */}
            <div className="head">
                <h4>New Project</h4>
                <FaTimes className="icon" onClick={closeModal}/>
            </div>
            <div className="body">
                <div className="inputs">
                    <h5>Project Name</h5>
                    <input type="text" name="title" placeholder="project name" defaultValue={project?.title ? `${project?.title}` : ""}/>
                </div>
                <div className="inputs">
                    <h5>Project Brief</h5>
                    <textarea name="brief" id="" defaultValue={project?.brief ? `${project?.brief}` : ""}></textarea>
                </div>
                {/* <div className="inputs">
                    <h5>Add User, min 1, max 2</h5>
                    <input type="text" placeholder="find users"/>
                </div> */}
                {/* map added  users here and remove user too and add user task */}
                <div className="inputs">
                    <h5>Date for completion</h5>
                    <input type="text" placeholder="enter date" />
                </div>
            </div>
            <div>
                <button onClick={closeModal} className="btn">Discard</button>
                <button type="submit" className="btn" disabled={isPending}>{isPending ? "Creating" : "Create"}</button>
            </div>
        {/* </form> */}
    </Wrapper>
    </ModalWrapper>
  )
}

export default CreateProjectModal

const Wrapper = styled.form`
    /* .content{ */
        background-color: var(--backgroundColor2);
        width: min(90%,var(--fixedWidth));
        padding: 2rem;
        display: grid;
        gap: 2rem;
        box-shadow: var(--shadowlg);
        border-radius: .5rem;
    /* } */
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