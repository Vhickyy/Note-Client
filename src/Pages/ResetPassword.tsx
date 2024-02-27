import React, { useState } from 'react'
import styled from 'styled-components'
import { customFetch } from '../api/axios'

const ResetPassword = () => {
  const [resetState,setResetState] = useState({loading:false})
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const {password} = Object.fromEntries(formData);
    const email = new URLSearchParams(window.location.search).get("email");
    try {
      setResetState({...resetState,loading:true})
        const res= await customFetch.post("/reset-password",{email,password})
        console.log(res);
        // navigate(`/reset-code?email=${email}`)
    } catch (error) {
        console.log(error);
        setResetState({...resetState,loading:true})
    }
}
  return (
    <Wrapper onSubmit={handleSubmit}>
        <div><h4>Input new password</h4></div>
        <div>
            <label htmlFor="password">New Password</label>
            <input type="text" name='password' id='password'  placeholder='New Password' />
        </div>
        <div>
            <label htmlFor="confirm password">Confirm Password</label>
            <input type="text" id='confirm password'  placeholder='Confirm Password' />
        </div>
        <button type='submit' disabled={resetState.loading}>Change Password</button>
    </Wrapper>
  )
}

export default ResetPassword

const Wrapper = styled.form`
margin-block: 4rem;
    padding-block: 2rem;
    background-color:  var(--secondaryColor);
    width: min(90%,var(--fixedWidth));
    margin-inline: auto;
    box-shadow: var(--shadowmd);
    border-radius: 1rem;
    text-align: center;
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    label{
        display: block;
        /* padding-top: 0.5rem; */
    }
    input{
        width: 100%;
        padding-block: .5rem;
        padding-inline: 1rem;
        outline: none;
        border: 2px solid transparent;
        border-radius: .3rem;
        font-size: 1rem;
        background-color: whitesmoke;
    }
    input:focus{
        border: 2px solid var(--primaryColor);
    }
    button{
        width: 100%;
    }
    label{
        text-align: start;
        padding-block: .5rem;
    }
    .last{
        padding-bottom: 1rem;
    }
`