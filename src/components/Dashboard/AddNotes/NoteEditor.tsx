
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

type NoteEditorProp = {
  value:string
  onChange?: React.Dispatch<React.SetStateAction<string>>
}
const NoteEditor = ({value,onChange}:NoteEditorProp) => {
    
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  )
}

export default NoteEditor