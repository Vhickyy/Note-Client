import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import NoteEditor from '../../components/Dashboard/AddNotes/NoteEditor'

const ReadProject = () => {
  return (
    <Wrapper>
        <Navbar page="Read Project"/>
        <form>
          <div className="top">
            <button>Project Details</button>
          </div>
            <NoteEditor/>
        </form>
    </Wrapper>
  )
}

export default ReadProject;

const Wrapper = styled.div`
  background-color: whitesmoke;
  form{
    padding-block: 2rem;
    width: min(90%,var(--maxWidth));
    margin-inline: auto;
    min-height: 86vh;
  }
  .top{
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin-bottom: 1rem;
  }
`