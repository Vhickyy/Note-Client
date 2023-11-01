import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

const NoteEditor = () => {
    const [value,setValue] = useState("")
  return (
    <div>
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
    </div>
  )
}

export default NoteEditor