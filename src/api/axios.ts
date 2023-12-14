import axios from "axios";
import { NoteType, User } from "../types/types";


export const customFetch = axios.create({
        baseURL: "/api",
        withCredentials:true
    })


export const getUser = async () : Promise<User> => {
    const { data }  = await customFetch.get("/user",{withCredentials:true});
    return data.user;
}
export const getAllNotes = async () : Promise<NoteType[]> => {
    const { data }  = await customFetch.get("/notes",{withCredentials:true});
    return data.notes;
}

export const addNote = async (note:NoteType) : Promise<NoteType> => {
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