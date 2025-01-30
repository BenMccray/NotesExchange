import React from 'react'
import {Link} from "react-router-dom"
import "../styles/TopNav.css"

const NavLink = ({href, text}) => {
  return (
    <Link className="link" to={href}>{text}</Link>
  )
}

export default NavLink;