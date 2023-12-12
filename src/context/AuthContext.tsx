import {  createContext, useContext, useEffect, useState } from "react";
import { customFetch, getUser } from "../api/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { Navigate, useNavigate } from "react-router-dom";
import { User } from "../types/types";

type AuthType =  {
    user: User | null,
    logout: () => void,
    saveUser: (user:User)=>void
}
const AuthContext = createContext({} as AuthType) ;

export const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
    const [authError,setAuthError] = useState(false);
    const [user,setUser] = useState<User | null>(null)
 

    // const navigate = useNavigate()
     const queryClient = useQueryClient()

    // const login = async (e:React.MouseEvent<HTMLButtonElement>) => {
    //   e.preventDefault()
    //   setLoading(true)
    //   try{
    //     const user:User = await customFetch.post("/login",{email:"vee@gmail.com",password:"secret"});
    //     console.log(user);
    //     setUser(user)
    //     navigate("/dashboard")
    //   }catch (e:any){
    //     console.log(e.response.data);
    //   }finally{
    //     setLoading(false)
    //   }
    // }

    const saveUser = (user:User) => {
      setUser(user)
    }

    const logout = async () => {
      queryClient.invalidateQueries();
      const res = await customFetch("/logout");
      console.log(res);
      // navigate("/login");
    }

    // const fetchUser = async () => {
    //   const user = await getUser();
    //   setUser(user)
    //   console.log(user);
    // }
    // useEffect(()=>{

    //   fetchUser();
    // },[])
  // const {data:user,error} = useQuery({queryKey:["user"],queryFn: getUser});
  // console.log(user,error);

  
  customFetch.interceptors.response.use(
    response => {
      console.log("hi");
      return response
    },
    error => {
      console.log("hey");
      if(error.response.status === 401){
        setAuthError(true);
      }
      return Promise.reject(error)
    },
  )


  useEffect(()=>{
    console.log(authError);
    if(!authError)return
    console.log("logging out");
    logout()
  },[authError])

    return (
        <AuthContext.Provider value={{user,saveUser,logout}}>
            { children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}