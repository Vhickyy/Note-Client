// import React, { useEffect } from 'react'
import styled from 'styled-components'
import ModalWrapper from '../../ModalWrapper'
import { FaTimes } from 'react-icons/fa'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addUserApi, deleteUserApi, getProject } from '../../../api/axios'
// import { useAuth } from '../../../context/AuthContext'



const AddUserModal = ({addUserModal,setAddUserModal}:{addUserModal: { open: boolean; title: string; projectId: string;}, setAddUserModal: React.Dispatch<React.SetStateAction<{open: boolean;title: string;projectId: string;}>>}) => {
    const {title,projectId} = addUserModal;
    const queryClient = useQueryClient();
    const {data:users} = useQuery({
        queryKey: ["single-project",projectId],
        queryFn: ()=>getProject(projectId)
    })
    
    const {mutate,isPending} = useMutation({
        mutationFn: addUserApi,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["single-project",projectId]})
        },
    })
    const addUser = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const email = "veevhickyy@gmail.com"
        console.log(projectId);
        mutate({id:projectId,email})
    }

    const {mutate:deleteMember} = useMutation({
        mutationFn: deleteUserApi,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["single-project",projectId]})
        },
    })

    const deleteUser = (e:React.MouseEvent<HTMLButtonElement>,{id,memberId}:{id:string,memberId:string}) => {
        e.preventDefault();
        deleteMember({id,memberId})
    }


  return (
    <ModalWrapper>
        <Wrapper >
            {/* <form className="content"> */}
                <div className="head">
                    <h4>Title:{title}</h4>
                    <FaTimes className="icon" onClick={()=>setAddUserModal({open:false,title:"",projectId:""})}/>
                </div>
                <div className='input'>
                <input type="text" placeholder='Enter Email of user' />
                <button onClick={addUser} disabled={isPending}>{!isPending ? "Add" : "Adding"}</button>
                </div>
                <div>
                    <p>{users?.members && users.members.length - 1 > 0 ? users.members.length - 1 : "No" } collaborator</p>
                    {users?.members.slice(1).map((user: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined })=>{
                        return(
                            <div key={user._id}>
                                <p>{user.name}</p>
                                <FaTimes onClick={ (e:React.MouseEvent<HTMLButtonElement>) => deleteUser(e,{id:projectId,memberId:user._id as string})}/>
                            </div>
                        )
                    })}
                </div>
            {/* </form> */}
        </Wrapper>
    </ModalWrapper>
  )
}

export default AddUserModal

const Wrapper = styled.form`
        background-color: var(--backgroundColor);
        width: min(90%,var(--fixedWidth));
        padding: 2rem;
        display: grid;
        gap: 2rem;
        box-shadow: var(--shadowlg);
        border-radius: .5rem;
        .head{
            display: flex;
            justify-content: space-between;
        }
        .input{
            display: flex;
            justify-content: space-between;
            align-items: center;
            row-gap: 1rem;
            input{
                height: 100%;
                width: 80%;
            }
        }
`