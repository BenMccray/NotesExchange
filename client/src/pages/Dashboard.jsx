import React from 'react'
import Loading from "components/Loading"
import TopNav from '../layout/TopNav';
import Sidebar from '../layout/Sidebar';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
      return <Loading/>
  }
  return (
    <>
      <TopNav/>
      <div>
        <Sidebar/>
        <DashContent/>
      </div>
    </>
  )
};

export default Dashboard;