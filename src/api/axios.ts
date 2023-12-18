import axios from "axios";
import { NoteType, User } from "../types/types";


export const customFetch = axios.create({
        baseURL: "/api",
        withCredentials:true
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
    console.log(data); 
    return data
}

export const getNote = (id:string) => {
    const data = customFetch.get(`/notes/${id}`)
    console.log(data); 
}

export const updateNote = (id:string,note:any) :any=> {
    const data = customFetch.patch(`/notes/${id}`,note)
    console.log(data);   
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

export const retrieveNote = async (id:string) => {
    const data = await customFetch.patch(`/notes/retrieve/${id}`)
    console.log(data); 
}

export const getAllDeletedNotes = async () : Promise<NoteType[]> => {
    const { data }  = await customFetch.get("/deleted-notes");
    console.log(data);
    
    return data.notes;
}

export const clearNotes = async () : Promise<NoteType[]> => {
    const { data }  = await customFetch.delete("/clear-notes");
    return data.notes;
}


// PROJECT API