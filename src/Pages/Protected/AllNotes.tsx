import AllNotesComponent from "../../components/Dashboard/AllNotes/AllNoteComponent"
import Navbar from "../../components/Dashboard/Navbar"
const AllNotes = () => {
  return (
    <div>
      <Navbar page="All Notes"/>
      <AllNotesComponent/>
    </div>
  )
}

export default AllNotes