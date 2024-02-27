import { useState } from 'react'
// import OtpInput from '../components/OtpInput'
import styled from 'styled-components'
import { customFetch } from '../api/axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [forgetState,setForgetState] = useState({loading:false})

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const {email} = Object.fromEntries(formData)
        try {
            setForgetState({...forgetState,loading:true})
            const res= await customFetch.post("/forgot-password",{email})
            console.log(res);
            navigate(`/reset-code?email=${email}`)
        } catch (error) {
            console.log(error);
            setForgetState({...forgetState,loading:false})
            
        }
    }
    
    
    return (
    <Wrapper onSubmit={handleSubmit}>
        <div>
            <h4>Something heyr</h4>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email'  placeholder='Enter Email' />
        </div>
        <button type='submit' disabled={forgetState.loading}>Send Code</button>
    </Wrapper>
  )
}

export default ForgotPassword

const Wrapper = styled.form`
    margin-block:4rem;
    padding-block: 2rem;
    background-color: var(--secondaryColor);
    width: min(90%,var(--fixedWidth));
    margin-inline: auto;
    box-shadow: var(--shadowmd);
    border-radius: 1rem;
    text-align: center;
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    label{
        display: block;
        padding-top: 0.5rem;
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
    input:focus{
        border: 2px solid var(--primaryColor);
    }
`