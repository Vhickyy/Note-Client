
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

type NoteEditorProp = {
  value:string
  setValue: React.Dispatch<React.SetStateAction<string>>

}
const NoteEditor = ({value,setValue}:NoteEditorProp) => {
    
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
    </div>
  )
}

export default NoteEditor