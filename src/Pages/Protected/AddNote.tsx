import Navbar from "../../components/Dashboard/Navbar";
import NoteEditor from "../../components/Dashboard/AddNotes/NoteEditor";

const AddNote = () => {
  return (
    <>
        <Navbar page="Add New Note"/>
        {/* <h1>add note</h1> */}
        <div>
          <div>
            <h4>Title</h4>
            <button>Save</button>
          </div>
          <NoteEditor/>
        </div>
    </>
  )
}

export default AddNote