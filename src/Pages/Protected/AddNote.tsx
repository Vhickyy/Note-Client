import Navbar from "../../components/Dashboard/Navbar";
import NoteEditor from "../../components/Dashboard/AddNotes/NoteEditor";
import styled from "styled-components";
const AddNote = () => {
  // const Edit: boolean = false
  return (
    <Wrapper>
        <Navbar page="Add New Note"/>
        {/* <h1>add note</h1> */}
        <form>
          <div className="top">
            <h4>Title</h4>
            <button>Save</button>
          </div>
          <NoteEditor/>
        </form>
    </Wrapper>
  )
}

export default AddNote

const Wrapper = styled.div`
  background-color: whitesmoke;
  form{
    padding-block: 2rem;
    width: min(90%,var(--maxWidth));
    margin-inline: auto;
    min-height: 86vh;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
`