import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import { useEffect, useRef, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DefaultEventsMap } from "@socket.io/component-emitter"
import { useParams } from "react-router-dom";

const ReadProject = () => {
  const [socket,setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [value,_setValue] = useState("");
  const quillRef = useRef<any>()
  const {id:projectId} = useParams();

  useEffect(()=>{
    const s = io("http://localhost:8000");
    setSocket(s)
    return () => {
      s.disconnect();
    }
  },[])

  useEffect(()=>{
    socket?.emit("join project",projectId);
    const editor = quillRef.current.getEditor();


    const realTimeNote = (delta:any) => {
      editor.updateContents(delta);
      socket?.emit("save", editor.getContents())
    }; 
    socket?.on("send changes", realTimeNote);

    return () => {
      socket?.off("send changes", realTimeNote);
    };
},[socket])

  const handler = (_value: string, delta: any, source: any, _editor: ReactQuill.UnprivilegedEditor) => {
    if (socket == null) return;
    if (source !== "user") return;
    socket?.emit("writing",delta)
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