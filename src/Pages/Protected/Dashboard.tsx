import { useEffect } from "react";
import { getAllNotes } from "../../api/axios";
import Navbar from "../../components/Dashboard/Navbar";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const {user} = useAuth();
  
  const getnotes = async () => {
    const res = await getAllNotes()
    console.log(res);
  }
  useEffect(() => {
    getnotes()
  },[])
  // if(isLoading){
  //   return <>Loadung</>
  // }else if(error){
  //   return <>{error}</>
  // }else{ 
    return (
      <div>
        <Navbar page="Dashboard"/>
          Dashboard
          {user?.name}
      </div>
    )
  // }
}

export default Dashboard
