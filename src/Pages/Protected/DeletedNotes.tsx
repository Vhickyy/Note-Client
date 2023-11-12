import DeletedNotesComp from "../../components/Dashboard/DeletedNotesComp"
import Navbar from "../../components/Dashboard/Navbar"

const DeletedNotes = () => {
  return (
    <div>
      <Navbar page="Deleted Notes"/>
      <DeletedNotesComp />
    </div>
  )
}

export default DeletedNotes