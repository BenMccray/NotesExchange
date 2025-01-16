import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Sidebar.css"
import { invertColor } from '../utils/invertColor.js'

const GroupLink = ({title, color}) => {
  return (
    <Link to={``} className='group-link' style={{backgroundColor: color}}>
      {title}
    </Link>
  )
}

export default GroupLink