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
  const login = async (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setLoading(true)
      try{
        const {data} = await customFetch.post("/login",{email:"vee@gmail.com",password:"secret"});
        console.log(data);
        saveUser(data.user)
        navigate(from, {replace: true})
      }catch (e:any){
        console.log(e.response.data);
      }finally{
        setLoading(false)
      }
    }

  return (
    <Wrapper>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter Email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="password"/>
        </div>
        <button onClick={login} disabled={loading}>{loading ? "Loading..." : "Log In"}</button>
        <p>Don't have an account? <Link to={"/signup"}>Register</Link></p>
        <button className="google" onClick={googleSignIn}>Sign in with Google</button>
      </form>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
padding-block: 5rem;
letter-spacing: normal;
/* min-height: 100vh; */
form{
  background-color: #33261f;
  width: min(90%,var(--fixedWidth));
  margin-inline: auto;
  padding: 3rem 2.5rem;
  border-radius: 0.5rem;
  border-bottom: .5rem solid var(--primaryColor);
  /* box-shadow: var(--shadowlg); */
  display: grid;
  gap: .7rem;
  font-size: .9rem;
  color: white;
  label{
    display: block;
    font-weight: 600;
    margin-bottom: .6rem;
  }
  input{
    width: 100%;
    background-color: #5e3b26;
    border: transparent;
    height: 2.5rem;
    font-size: 1rem;
    padding: .5rem;
    border-radius: .3rem;
    caret-color: var(--primaryColor);
    outline: none;
    color: white;
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
  input:focus{
    border: 2px solid var(--primaryColor);
  }
  a{
    color: var(--primaryColor80);
  }
}
  /* height: 100vh; */
`
