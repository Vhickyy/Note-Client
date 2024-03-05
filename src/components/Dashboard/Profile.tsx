import styled from "styled-components"

const Profile = () => {
  return (
    <Wrapper>
      <section className="section-1">
        <div>
          <label htmlFor="upload">Upload Picture</label>
          <input type="file" name="upload" id="upload" />
        </div>
        <aside className="input-gap">
          <h3>Edit Profile</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <button>Update Profile</button>
        </aside>
      </section>
      <section className="section-2">
        <div className="input-gap">
          <h3>Change Password</h3>
          <div>
            <label htmlFor="password">New Password</label>
            <input type="text" name="password" id="password" placeholder="New Password" />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
          </div>
          <button>Change Password</button>
        </div>
      </section>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.form`
  width: 100%;
  padding: 1rem;
  border-radius: .5rem;
  background-color: var(--secondaryColor); 
  color: var(--textColor);
  box-shadow: var(--shadowmd);
  section{
    color: var(--textColor);
  }
  .section-2{
    display: grid;
  }
  label{
    display: block;
    margin-bottom: .5rem;
  }
  input{
    width: 100%;
    padding: .5rem;
  }
  .input-gap{
    display: grid;
    gap: 1rem;
  }
  @media screen and (min-width: 700px) {
    .section-1{
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    }
    .section-2{
      grid-template-columns: 1fr 1fr;
      grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    }
  }
`