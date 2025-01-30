import React, {useState, useEffect} from 'react'
import SidebarGroups from '../components/SidebarGroups';



const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  const [classmates, setClassmates] = useState([]);

  

  return (
    <div className='sidebar-container'>
      <SidebarGroups/>
      <div className='list-container'>
        <h1>Classmates</h1>
        <ul>
          {classmates.map((classmate, idx) => <li className='classmate' key={idx}><span>{classmate.displayName}</span></li>)}
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;