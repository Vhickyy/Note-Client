import { Outlet, useParams } from 'react-router-dom'
import { ProjectType } from '../../types/types';
import { useQuery } from '@tanstack/react-query';
import { getProject } from '../../api/axios';
import NotFound from '../NotFound';
import Navbar from '../../components/Dashboard/Navbar';

const CheckMember = () => {
    const {id:projectId} = useParams();
    const {data,isLoading} = useQuery<ProjectType>({queryKey: ["projects",projectId],queryFn: ()=> getProject(projectId)});
    
  return (
    <div>
        <Navbar page="Read Project"/>
        {isLoading ? <h1>Loading</h1> : data ? <Outlet/> : <NotFound/>}
    </div>
  )
}

export default CheckMember