import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import styled from "styled-components"
import Navbar from "../../components/Dashboard/Navbar"
import { useEffect, useRef, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DefaultEventsMap } from "@socket.io/component-emitter"
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../api/axios";
import { ProjectType } from "../../types/types";
import { useAuth } from "../../context/AuthContext";

const ReadProject = () => {
  const [socket,setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [value,_setValue] = useState("");
  const quillRef = useRef<any>()
  const {id:projectId} = useParams();
  const {user} = useAuth();
  const navigate = useNavigate()

  // const {data,isLoading,error} = useQuery<ProjectType>({queryKey: ["projects",projectId],queryFn: ()=> getProject(projectId)});
  // useEffect(()=>{
  //   console.log(data);
  //   if(!isLoading && !data?.members.includes(user?.id!)){
  //     navigate("/dashboard/project")
  //   }
    
  // },[])

  useEffect(()=>{
    const s = io("http://localhost:8000");
    setSocket(s)
    return () => {
      s.disconnect();
    }
  },[])

  useEffect(()=>{
    socket?.emit("join project",projectId);
    const editor = quillRef?.current?.getEditor();
    const loadDocument = (document: any) => {
      editor.setContents(document);
      editor.enable();
    };
    socket?.once("get project", loadDocument);
    const timer = setInterval(() => {
      socket?.emit("save", editor.getContents());
    }, 3000);
    const realTimeNote = (delta:any) => {
      editor.updateContents(delta);
    }; 
    socket?.on("send changes", realTimeNote);

    return () => {
      clearInterval(timer);
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
        {/* <Navbar page="Read Project"/> */}
        <form>
          <div className="top">
            <button>Project Details</button>
          </div>
          <div>
            <ReactQuill theme="snow" ref={quillRef}  value={value} onChange={handler}/>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
`