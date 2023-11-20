import axios from "axios";
import { NoteType } from "../types/types";

export const customFetch = axios.create({
        baseURL: "/api"
    })


export const getAllNotes = async () : Promise<NoteType[]> => {
    const { data }  = await customFetch.get("/notes")
    console.log(data);   
    return data;
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