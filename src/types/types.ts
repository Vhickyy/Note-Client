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