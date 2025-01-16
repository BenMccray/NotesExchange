import React from 'react'
import {Link} from "react-router-dom"
import "../styles/TopNav.css"

const NavLink = ({text}) => {
  return (
    <Link className="link" to={`/${text.toLowerCase()}`}>{text}</Link>
  )
}

export default NavLink;