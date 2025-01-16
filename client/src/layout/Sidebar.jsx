import React, {useState, useEffect} from 'react'
import "../styles/Sidebar.css"
import GroupLink from '../components/GroupLink';

const courses = [
  { title: "Introduction to Psychology", color: "#FF5733" },
  { title: "Calculus I", color: "#33FF57" },
  { title: "Organic Chemistry", color: "#3357FF" },
  { title: "World History 101", color: "#FFC300" },
  { title: "Creative Writing", color: "#C70039" },
  { title: "Principles of Economics", color: "#900C3F" }]
const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  const [classmates, setClassmates] = useState([]);

  

  return (
    <div className='sidebar-container'>
      <div className='groups'>
        <h1>Groups</h1>
        <ul>
          {courses.map(({title, color}) => <GroupLink title={title} color={color}/>)}
        </ul>
      </div>
      <div className='classmates'>
        <h1>Classmates</h1>
        <ul>
          {classmates.map((classmate) => <li className='classmate'>{classmate.displayName}</li>)}
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;