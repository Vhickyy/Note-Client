import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DefaultEventsMap } from "@socket.io/component-emitter"
import {  useParams } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import Random from "../../components/Dashboard/RandomBtn";

const ReadProject = () => {
  const [socket,setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [value,_setValue] = useState("");
  // const [pc,setPc] = useState< RTCPeerConnection | null>(null)
  // const [localAudio,setLocalAudio] = useState<MediaStreamTrack | null>(null)
  const quillRef = useRef<any>()
  const {id:projectId} = useParams();
  // const {user} = useAuth();
  // const navigate = useNavigate()

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

  // useEffect(()=>{
  //   const getAudio = async ()=>{
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //       const audioTrack = stream.getAudioTracks()[0];
  //       setLocalAudio(audioTrack)
  //       console.log(audioTrack);
  //     } catch (error) {
  //       console.log(error);
        
  //     }
  //   }
  //   getAudio()
  // },[])

  useEffect(()=>{
    // socket?.on("snf offer", async()=>{
    //   const peer = new RTCPeerConnection()
    //   setPc(peer)
    //   const sdp = await pc?.createOffer()
    //   socket.emit("ss",{sdp})
    // })
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

    socket?.on("talking", (data:any)=>{
      console.log(data);
      
    });

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


  // const viewDetails = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault()
  //   if(true){
  //     console.log("kk");
      
  //   }else{

  //     console.log("j");
  //   }
    
  // }
  
  return (
    <Wrapper>
        {/* <Navbar page="Read Project"/> */}
        <form>
          <div className="top">
            {/* <button onClick={(e)=>viewDetails(e)}>Project Details</button> */}
            {/* <button onClick={(e)=>raiseHand(e)}>{hand ? "hand up" : "hand down"}</button> */}
            {/* <button type="button" onClick={(e)=>speakOrNot(e)}>{speak ? "speak" : "mute"}</button> */}
            <Random socket={socket}/>
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