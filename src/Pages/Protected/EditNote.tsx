
import Navbar from "../../components/Dashboard/Navbar"
import NoteEditor from '../../components/Dashboard/AddNotes/NoteEditor'

const EditNote = () => {
  return (
    <div>
        <Navbar page="Edit Note"/>
        <div>
            <NoteEditor/>
        </div>
    </div>
  )
}

export default EditNote