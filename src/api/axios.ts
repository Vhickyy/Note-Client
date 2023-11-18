import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getAllNotes = () => {
    try {
        const data = axios.get("/")
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}

export const addNote = (note:any) => {
    try {
        const data = axios.post("/",note)
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}

export const updateNote = (id:string,note:any) => {
    try {
        const data = axios.patch(`/${id}`,note)
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}

export const deleteNote = (id:string) => {
    try {
        const data = axios.delete(`/${id}`)
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}