import styled from "styled-components"
import AllNotesComponent from "../../components/Dashboard/AllNotes/AllNoteComponent"
import Navbar from "../../components/Dashboard/Navbar"
const AllNotes = () => {
  return (
    <Wrapper>
      <Navbar page="All Notes"/>
      <AllNotesComponent/>
    </Wrapper>
  )
}

export default AllNotes
const Wrapper = styled.div`
  background-color: whitesmoke;
`