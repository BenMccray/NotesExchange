import React, {useState} from 'react'
import "../styles/Sidebar.css"
import GroupLink from '../components/GroupLink';

const courses = [
    { title: "Introduction to Psychology", color: "#FF5733" },
    { title: "Calculus I", color: "#33FF57" },
    { title: "Organic Chemistry", color: "#3357FF" },
    { title: "World History 101", color: "#FFC300" },
    { title: "Creative Writing", color: "#C70039" },
    { title: "Principles of Economics", color: "#900C3F" }]

const SidebarGroups = () => {
  return (
    <div className='list-container'>
        <h1>Groups</h1>
        <ul>
          {courses.map(({title, color}) => <GroupLink id={69} title={title} color={color}/>)}
        </ul>
      </div>
  )
}

export default SidebarGroups