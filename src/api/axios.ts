import axios from "axios";
import { NoteType, ProjectType, User } from "../types/types";


export const customFetch = axios.create({
        // baseURL: "http://localhost:8000/api",
        baseURL: "https://note-backend-boze.onrender.com/api",
        headers: {
            // origin: "http://localhost:5173"
            // "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5173",
            // "Access-Control-Allow-Headers":
            //     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
          },
        withCredentials: true
    })


export const getUser = async () : Promise<User> => {
    const { data }  = await customFetch.get("/user");
    return data.user;
}

// NOTES API
export const getAllNotes = async () : Promise<NoteType[]> => {
    const { data }  = await customFetch.get("/notes");
    return data.notes;
}

export const addNoteApi = async (note:{title:string,category:string,noteBody:string}) : Promise<NoteType> => {
    const {data} = await customFetch.post("/notes",note);
    return data
}

export const getNote = async (id:string | undefined) : Promise<NoteType> => {
    const {data}= await customFetch.get(`/notes/${id}`)
    console.log(data); 
    return data.note
}

export const updateNote = async ({id,note} : {id:string | undefined,note:any}) : Promise<any>=> {
    const data = await customFetch.patch(`/notes/${id}`,note);
    return data
}

export const deleteSingleNote = async (id:string) => {
    const data = await customFetch.delete(`/notes/${id}`)
    console.log(data); 
}

export const removeNote = async (id:string) => {
    const data = await customFetch.patch(`/notes/delete/${id}`)
    console.log(data); 
}

export const retrieveNoteApi = async (id:string) => {
    const data = await customFetch.patch(`/notes/retrieve/${id}`)
    console.log(data); 
}

export const getAllDeletedNotes = async () : Promise<NoteType[]> => {
    const { data }  = await customFetch.get("/deleted-notes");
    return data.notes;
}

export const clearAllNote = async ()  => {
    const { data }  = await customFetch.delete("/clear-notes");
    return data.msg;
}


// PROJECT API
export const getAllProjects = async () : Promise<ProjectType[]> => {
    const { data }  = await customFetch.get("/projects");
    // console.log(data);
    return data.projects;
}
export const getProject = async (id:string | undefined) : Promise<any> => {
    const {data}= await customFetch.get(`/projects/${id}`)
    // console.log(data);
    return data.project
}
export const deleteProjectApi = async (id:string) => {
    const data = await customFetch.delete(`/projects/${id}`)
    return data
}
export const createProjectApi = async (project:{title:string,brief:string,dueDate:string}) => {
    const data = await customFetch.post('/projects',project)
    return data
}
export const addUserApi = async ({id,email}:{id:string,email:string}) => {
    const data = await customFetch.patch(`project/add-user/${id}`,{email});
    // console.log(data);
    return data  
}
export const deleteUserApi = async ({id,memberId}:{id:string,memberId:string}) => {
    const data = await customFetch.patch(`project/delete-user/${id}`,{memberId});
    // console.log(data);
    return data  
}