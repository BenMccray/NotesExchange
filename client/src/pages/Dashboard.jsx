import React, {useState} from 'react'
import LoadingCircle from "../components/LoadingCircle"
import TopNav from '../layout/TopNav';
import Sidebar from '../layout/Sidebar';
import DashContent from "../layout/DashContent"
import useAuthRedirect from '../hooks/useAuthRedirect';

const Dashboard = () => {
  useAuthRedirect();
  const [loading, setLoading] = useState(false);
  if (loading) {
      return <LoadingCircle/>
  }
  return (
    <div style={{height: "100vh"}}>
      <TopNav/>
      <div className='container'>
        <Sidebar/>
        <DashContent/>
      </div>
    </div>
  )
};

export default Dashboard;