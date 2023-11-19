import axios from "axios";
import { NoteType } from "./types";

export const customFetch = axios.create({
        baseURL: "/api"
    })


export const getAllNotes = async () : Promise<NoteType[]> => {
    const response  = await customFetch.get("/notes")
    console.log(response.data);   
    return response.data;
}

export const addNote = (note:any) => {
    try {
        const data = customFetch.post("/notes",note)
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}

export const getNote = (id:string) => {
    try {
        const data = customFetch.get(`/notes/${id}`)
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}

export const updateNote = (id:string,note:any) :any=> {
    try {
        const data = customFetch.patch(`/notes/${id}`,note)
        console.log(data);   
        return data
    } catch (error) {
        console.log(error);
    }
}

export const deleteSingleNote = async (id:string) => {
    const data = await customFetch.delete(`/notes/${id}`)
    console.log(data); 
}