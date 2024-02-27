import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { customFetch } from "../api/axios";
import { useState } from "react";
import { toast } from "react-toastify";
const Signup =  () => {
  const [signupState,setSignupState] = useState({loading:false})
  const navigate = useNavigate();
  const submitForm = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    
    if(!newUser.name || !newUser.email || !newUser.password){
      console.log("all fields are required");
      return
    }
    try{
      setSignupState({...setSignupState,loading:true})
      const response = await customFetch.post("/register", newUser);
      console.log(response);
      
      console.log(response.data)
      navigate(`/verifycode?email=${newUser.email}`)
    }catch(e:any){
      if(e.response.status === 500){
        console.log(e);
        toast("Internal Server Error",{position:"top-center"})
        console.log("jj");
        return
      }
      console.log(e.response.data)
      toast(e.response.data,{position:"top-center"})
      toast(e.response.data,{position:"bottom-left"})
      console.log("hi");
      
    }finally{
      setSignupState({...setSignupState,loading:false})
    }
  }
  return (
    <Wrapper>
      <form onSubmit={submitForm}>
        <div className="flex">
            <div>
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" id="name" placeholder="First Name"/>
                {/* <p className="text_small">First name is required</p> */}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Email"/>
                {/* <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name" placeholder=" Last Name"/> */}
                {/* <p className="text_small">Last name is required</p> */}
            </div>
        </div>
        {/* <div> */}
          {/* <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email"/> */}
          {/* <p className="text_small">Enter a valid email address</p> */}
        {/* </div> */}
        <div className="flex">  
          <div>
            <label htmlFor="password">Password</label> 
            <input type="password" name="password" id="password" placeholder="Password"/>
            {/* <p className="text_small">password too weak</p> */}
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
            {/* <p className="text_small">Password do not match</p> */}
          </div>
        </div>
        {/* <div className="flex"> */}
          <button type="submit" disabled={signupState.loading}>Register</button>
          <p>OR</p>
          <button className="google">Sign up with Google</button>
        {/* </div> */}
        <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
      </form>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div`
padding-block: 4rem;
letter-spacing: normal;
form{
  background-color: var(--secondaryColor);
  width: min(90%,700px);
  margin-inline: auto;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  border-bottom: .5rem solid var(--primaryColor);
  display: grid;
  gap: .3rem;
  font-size: 1rem;
  .flex{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    & > div {
      width: 100%;
    }
  }
  label{
    display: block;
    /* font-weight: 600; */
    margin-block: .5rem;
  }
  input{
    width: 100%;
    padding-block: .5rem;
    padding-inline: 1rem;
    outline: none;
    border: 2px solid transparent;
    border-radius: .3rem;
    font-size: .8rem;
    background-color: whitesmoke;
  }
  button{
    margin-top: .5rem;
    width: 100%;
  }
  button:disabled{
    background-color: #5e3b26;
  }
  p{
    margin: 0;
    text-align: center;
    a{
      color: var(--primaryColor);
    }
  }
  .text_small{
    text-align: start;
    font-weight: 600;
    color: var(--redText);
  }
  input:focus{
    border: 2px solid var(--primaryColor);
  }
  a{
    color: var(--primaryColor80);
  }
}
@media screen and (min-width: 659px){
    form{
      padding-inline: 4rem;
        .flex{
            flex-direction: row;
        }
    }
    .flex{
        flex-direction: row;
    }
}
`
