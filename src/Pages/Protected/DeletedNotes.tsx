import DeletedNotesComp from "../../components/Dashboard/DeletedNotesComp"
import Navbar from "../../components/Dashboard/Navbar"
import styled from "styled-components"
const DeletedNotes = () => {
  return (
    <Wrapper>
      <Navbar page="Deleted Notes"/>
      <DeletedNotesComp />
    </Wrapper>
  )
}

export default DeletedNotes

const Wrapper = styled.div`
  background-color: whitesmoke;
`