import React, {useState, useEffect} from 'react'
import "../styles/Dashboard.css"
import LoadingCircle from '../components/LoadingCircle';


const DashContent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    /**
     * Get data for different items in the dashboard content
     */
    setTimeout(() =>  setLoading(false), 10000)
   
  }, []);

  if (loading) {
    return (
    <div className='content-wrapper'>
      <div className='dash-content'>
        <LoadingCircle/>
      </div>
    </div>)
  }
  return (
    <div className='content-wrapper'><div className='dash-content'>DashContent</div></div>
    
  )
}

export default DashContent;