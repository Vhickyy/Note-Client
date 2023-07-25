import styled from "styled-components"
import { Link } from "react-router-dom"
const Signup = () => {
  return (
    <Wrapper>
      <form>
        <div className="flex">
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" id="first_name"/>
                {/* <p className="text_small">must be between 3 to 20 characters</p> */}
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name"/>
                {/* <p className="text_small">must be between 3 to 20 characters</p> */}
            </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"/>
          {/* <p className="text_small">Enter a valid email address</p> */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
          {/* <p className="text_small">password too weak</p> */}
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password"/>
          {/* <p className="text_small">Password do not match</p> */}
        </div>
        <button>Register</button>
        <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
      </form>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div`
padding-block: 7rem 3rem;
letter-spacing: normal;
color: var(--primaryColor80);
form{
  background-color: var(--primaryColor10);
  width: min(90%,var(--fixedWidth));
  margin-inline: auto;
  padding: 2rem 2rem;
  border-radius: 0.3rem;
  border-top: .5rem solid var(--primaryColor);
  box-shadow: var(--shadowlg);
  display: grid;
  gap: 1rem;
  font-size: .9rem;
  .flex{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label{
    display: block;
    font-weight: 600;
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
  .text_small{
    text-align: start;
    font-weight: 600;
    color: var(--redText);
  }
  input:focus{
    border: 2px solid var(--primaryColor70);
  }
  a{
    color: var(--primaryColor80);
  }
}
@media screen and (min-width: 659px){
    form{
        .flex{
            flex-direction: row;
        }
    }
    .flex{
        flex-direction: column;
    }
}
`
