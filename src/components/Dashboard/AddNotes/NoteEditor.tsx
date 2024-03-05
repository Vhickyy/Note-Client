
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import styled from "styled-components";

type NoteEditorProp = {
  value:string
  onChange?: React.Dispatch<React.SetStateAction<string>>
}
const NoteEditor = ({value,onChange}:NoteEditorProp) => {
    
  return (
    <>
        <ReactQuill theme="snow" value={value} onChange={onChange} />
    </>
  )
}

export default NoteEditor

