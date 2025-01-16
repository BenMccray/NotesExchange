import React, {useState} from 'react'
import "../styles/TopNav.css"
import NavLink from '../components/NavLink';

const TopNav = () => {
    const [active, setActive] = useState()
  return (
    <nav className='nav-container'>
        <div className='navlinks'>
            <NavLink text="Dashboard"/>
            <NavLink text="Groups"/>
            <NavLink text="Account"/>
        </div>
    </nav>
  )
};

export default TopNav;