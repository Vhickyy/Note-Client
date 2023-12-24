import {  createContext, useContext, useEffect, useState } from "react";
import { customFetch } from "../api/axios";
// import {  useQueryClient } from "@tanstack/react-query";
import { User } from "../types/types";

type AuthType =  {
    user: User | null,
    saveUser: (user:User)=>void
    removeUser: () => void
    logout: () => void
    loading:boolean
    data:any
    setData:any
}
const AuthContext = createContext({} as AuthType) ;

export const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser] = useState<User | null>(null)
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([])
    
    //  const queryClient = useQueryClient()
     
    const saveUser = (user:User) => {
      setUser(user)
    }

    const removeUser = () => {
      setUser(null)
    }

    const logout = async () => {
      // queryClient.invalidateQueries();
      const res = await customFetch("/logout");
      console.log(res);
      removeUser()
    }

    const getUser = async () => {
      const {data} = await customFetch("/user");
      return data.user
    }

    useEffect(()=>{
      const userExist = async () => {
          try {
            const user = await getUser();
            console.log(user);
            saveUser(user)
          } catch (error) {
            console.log(error);
            removeUser()
          }finally{
              setLoading(false)
          }
      }
      userExist()
  },[])
    
  customFetch.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if(error.response.status === 401){
        setUser(null)
      }
      return Promise.reject(error)
    },
  )

    return (
        <AuthContext.Provider value={{user,saveUser,removeUser,logout,loading,data,setData}}>
            { children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}