import styled from "styled-components"
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { customFetch } from "../api/axios";
import { useAuth } from "../context/AuthContext";
import {  useState } from "react";

const Login = () => {
  const [loading,setLoading] = useState(false)
  const {saveUser} = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";
  
  const googleSignIn = async (e:React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    window.open("http://localhost:8000/auth/google","_self")
  }
  // getaddrinfo ENOTFOUND ac-kh38zfn-shard-00-00.up4r05f.mongodb.net
  const login = async (e:React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget);
      const loginData = Object.fromEntries(formData);
      setLoading(true)
      try{
        // {email:"vee@gmail.com",password:"secret"}
        const {data} = await customFetch.post("/login",loginData);
        saveUser(data.user)
        navigate(from, {replace: true})
      }catch (e:any){
        // console.log(e);
        // check for server error
        console.log(e.response.data);
      }finally{
        setLoading(false)
      }
    }

  return (
    <Wrapper>
      <form onSubmit={login}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required id="email" placeholder="Enter Email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required id="password" placeholder="password"/>
        </div>
        <button type="submit" disabled={loading}>{loading ? "Loading..." : "Log In"}</button>
        <button className="google" onClick={googleSignIn}>Sign in with Google</button>
        <div className="flex">
          <p>Don't have an account? <Link to={"/signup"}>Register</Link></p>
          <p><Link to={"/forget-password"}>Forgot password</Link></p>
        </div>
      </form>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
padding-block: 5rem;
letter-spacing: normal;
form{
  background-color: var(--secondaryColor);
  width: min(90%,var(--fixedWidth));
  margin-inline: auto;
  padding: 3rem 2.5rem;
  border-radius: 0.5rem;
  border-bottom: .5rem solid var(--primaryColor);
  /* box-shadow: var(--shadowlg); */
  display: grid;
  gap: .7rem;
  font-size: .9rem;
  color: var(--textColor);
  label{
    display: block;
    font-weight: 600;
    margin-bottom: .6rem;
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
    margin-top: .5rem;
    width: 100%;
  }
  button:disabled{
    background-color: #5e3b26;
  }
  .flex{
    display: flex;
    justify-content: space-between;
  }
  p{
    margin: 0;
    /* text-align: center; */
    a{
      color: var(--primaryColor);
    }
  }
  input:focus{
    border: 2px solid var(--primaryColor);
  }
  a{
    color: var(--primaryColor80);
  }
}
  /* height: 100vh; */
`
