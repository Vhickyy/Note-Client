
import Navbar from "../../components/Dashboard/Navbar"
import NoteEditor from '../../components/Dashboard/AddNotes/NoteEditor'

const ReadProject = () => {
  return (
    <div>
        <Navbar page="Read Project"/>
        <div>
            <NoteEditor/>
        </div>
    </div>
  )
}

export default ReadProject