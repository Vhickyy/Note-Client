import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import { useEffect, useRef, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DefaultEventsMap } from "@socket.io/component-emitter"
import { useParams } from "react-router-dom";

const ReadProject = () => {
  const [socket,setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [value,setValue] = useState("");
  const quillRef = useRef<any>()
  const {id:projectId} = useParams()
  console.log(projectId);
  

  useEffect(()=>{
    const s = io("http://localhost:8000");
// //     setSocket(s)
    s.emit("join project",projectId);

//     return () => {
//         s.disconnect()
//         setSocket(s)
//     }
},[])
  useEffect(()=>{
    // if(quillRef.current){
      const editor = quillRef.current.getEditor()
      console.log(editor);
      // editor.on("text-change", (delta: any,oldDelta: any,source: any) => {
      //   console.log(delta);
        
      // })
    // }
  },[])

  useEffect(()=>{
    
  })

  const handler = (value: string, delta: any, source: any, editor: ReactQuill.UnprivilegedEditor) => {
    console.log(delta);
    
  }
  
 
  return (
    <Wrapper>
        <Navbar page="Read Project"/>
        <form>
          <div className="top">
            <button>Project Details</button>
          </div>
          <div>
            <ReactQuill theme="snow" ref={quillRef} value={value} onChange={handler}/>
        </div>
        </form>
    </Wrapper>
  )
}

export default ReadProject;

const Wrapper = styled.div`
  background-color: var(--bgColor);
  form{
    padding-block: 2rem;
    width: min(90%,var(--maxWidth));
    margin-inline: auto;
    min-height: 86vh;
  }
  .top{
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin-bottom: 1rem;
  }
`