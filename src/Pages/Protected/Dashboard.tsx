import Navbar from "../../components/Dashboard/Navbar";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const {user} = useAuth();
  
  
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
