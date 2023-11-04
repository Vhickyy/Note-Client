import Navbar from "../../components/Dashboard/Navbar";
import NoteEditor from "../../components/Dashboard/AddNotes/NoteEditor";

const AddNote = () => {
  const Edit: boolean = false
  return (
    <>
        <Navbar page={!Edit ? "Add New Note" : "Edit Note"}/>
        {/* <h1>add note</h1> */}
        <form>
          <div>
            <h4>Title</h4>
            {!Edit ? <button>Save</button> : <button>Save Changes</button>}
          </div>
          <NoteEditor/>
        </form>
    </>
  )
}

export default AddNote