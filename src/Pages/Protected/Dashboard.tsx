import Navbar from "../../components/Dashboard/Navbar";
import { useOutletContext } from "react-router-dom"

const Dashboard = () => {
  const {user} = useOutletContext() as any;
  
  
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
