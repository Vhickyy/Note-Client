import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
const Profile = () => {
  return (
    <Wrapper>
      <Navbar page="Profile"/>
      <section>
        Profile
      </section>
    </Wrapper>
  )
}

export default Profile
const Wrapper = styled.div`
section{
  min-height: 86vh;
}
`