import styled from "styled-components"
import { Link } from "react-router-dom";
import axios from "axios";
const Signup =  () => {
  const submitForm = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    if(!newUser.first_name || !newUser.last_name || !newUser.password){
      console.log("all fields are required");
      return
    }
    try{
      const response = await axios.post("/api/test-user", newUser);
      console.log(response.data)
       form.reset()
    }catch(e){
      console.log(e)
    }
  }
  return (
    <Wrapper>
      <form onSubmit={submitForm}>
        <div className="flex">
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" id="first_name" placeholder="First Name"/>
                {/* <p className="text_small">must be between 3 to 20 characters</p> */}
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name" placeholder=" Last Name"/>
                {/* <p className="text_small">must be between 3 to 20 characters</p> */}
            </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email"/>
          {/* <p className="text_small">Enter a valid email address</p> */}
        </div>
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
        <button>Register</button>
        <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
        <button className="google">Sign up with Google</button>
      </form>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div`
padding-block: 4rem;
letter-spacing: normal;
/* background-color: whitesmoke; */
form{
  background-color: #33261f;
  width: min(90%,var(--fixedWidth));
  margin-inline: auto;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  border-bottom: .5rem solid var(--primaryColor);
  /* box-shadow: var(--shadowlg); */
  display: grid;
  gap: .6rem;
  font-size: .9rem;
  color: white;
  .flex{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label{
    display: block;
    font-weight: 600;
    margin-block: .5rem;
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
        .flex{
            flex-direction: row;
        }
    }
    .flex{
        flex-direction: column;
    }
}
`
