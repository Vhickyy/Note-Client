import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
const Profile = () => {
  return (
    <Wrapper>
      <Navbar page="Profile"/>
      Profile
    </Wrapper>
  )
}

export default Profile
const Wrapper = styled.div`
  min-height: 86vh;
`