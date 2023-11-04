import styled from "styled-components"
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <Wrapper>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
        </div>
        <button>Log In</button>
        <p>Don't have an account? <Link to={"/signup"}>Register</Link></p>
        <button className="google">Sign in with Google</button>
      </form>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
padding-block: 4rem;
letter-spacing: normal;
color: var(--primaryColor80);
background-color: whitesmoke;
form{
  background-color: white;
  width: min(90%,var(--fixedWidth));
  margin-inline: auto;
  padding: 2rem 2rem;
  border-radius: 0.3rem;
  border-top: .5rem solid var(--primaryColor);
  box-shadow: var(--shadowlg);
  display: grid;
  gap: 1rem;
  font-size: .9rem;
  label{
    display: block;
    font-weight: 600;
    margin-bottom: .5rem;
  }
  input{
    width: 100%;
    background-color: whitesmoke;
    border: transparent;
    height: 2.5rem;
    font-size: 1rem;
    padding: .5rem;
    border-radius: .3rem;
    caret-color: var(--primaryColor);
    outline: none;
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
    /* outline: none; */
    border: 2px solid var(--primaryColor70);
  }
  a{
    color: var(--primaryColor80);
  }
}
  /* height: 100vh; */
`
