import styled from "styled-components"

const Profile = () => {
  return (
    <Wrapper>
      <div>
        <label htmlFor="upload">Upload Picture</label>
        <input type="file" name="upload" id="upload" />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="upload">Upload Picture</label>
        <input type="file" name="upload" id="upload" />
      </div>
      <div>
        <label htmlFor="upload">Upload Picture</label>
        <input type="file" name="upload" id="upload" />
      </div>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.form`
  width: 100%;
  padding: 1rem;
  border-radius: .5rem;
  /* height: 20rem; */
  background-color: var(--secondaryColor); 
  color: var(--textColor);
  box-shadow: var(--shadowmd);
`