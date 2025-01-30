import React, {useState} from 'react'
import "../styles/TopNav.css"
import NavLink from '../components/NavLink';

const TopNav = () => {
  return (
    <nav className='nav-container'>
        <div className='navlinks'>
            <NavLink href="/" text="Dashboard"/>
            <NavLink href="/chat" text="Groups"/>
            <NavLink href="/account" text="Account"/>
        </div>
    </nav>
  )
};

export default TopNav;