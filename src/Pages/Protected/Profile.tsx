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
section{
  /* min-height: 86vh; */
}
`