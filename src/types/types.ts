export type Filter = {
    sort:{
        show:boolean,
        sort:string
    },
    category: {
        show: boolean,
        category:string
    },
    setSort:React.Dispatch<React.SetStateAction<{
    show: boolean;
    sort: string;
}>>,
    setCategory: React.Dispatch<React.SetStateAction<{
    show: boolean;
    category: string;
}>>,
    showForm: boolean,
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export type NoteType = {
    id: string
    title: string,
    noteBody: string,
    isFav: boolean,
    isDeleted: boolean,
    category:string
}

export type User = {
    _id:string,
    name:string,
    profile:string,
    email:string,
    role: "user" | "admin"
}