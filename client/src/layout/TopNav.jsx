import React from 'react'
import "../styles/TopNav.css"

const TopNav = () => {
    const [active, setActive] = useState()
  return (
    <nav className='nav-container'>
        <div className='navlinks'>
            <a className='navlink'></a>
            <a className='navlink'></a>
            <a className='navlink'></a>
            <a className='navlink'></a>

        </div>
    </nav>
  )
};

export default TopNav;