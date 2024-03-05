import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import ProfileComp from "../../components/Dashboard/Profile"
const Profile = () => {
  return (
    <Wrapper>
      <Navbar page="Profile"/>
      <section>
        <ProfileComp />
      </section>
    </Wrapper>
  )
}

export default Profile
const Wrapper = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: auto 1fr;

  section{
    padding-block: 2rem;
    margin-inline: auto;
    width: min(90%,var(--maxWidth2));
    /* min-height: 86vh; */
    /* height: 100%; */
    color:white;
  }
`