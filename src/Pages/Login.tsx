import styled from "styled-components"
// import axios from "axios"
import { Link, useNavigate  } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const googleSignIn = async (e:React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    window.open("http://localhost:8000/auth/google","_self")
  }

  const login = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try{
      const res = await axios.post("/api/login",{email:"vee@gmail.com",password:"secret"});
      console.log(res.data);
      navigate("/dashboard")
    }catch (e:any){
      console.log(e.response.data);
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
        <button onClick={login}>Log In</button>
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
