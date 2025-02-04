import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Sidebar.css"

const GroupLink = ({id, title, color}) => {
  return (
    <Link to={`/chat/${id}`} className='group-link' style={{backgroundColor: color}}>
      <span>{title}</span>
    </Link>
  )
}

export default GroupLink