import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Zephyr.css'
import logo_light from '../assets/logo-light.png'
import logo_dark from '../assets/logo-dark.png'
import search_icon from '../assets/search-icon.png'
import night_icon from '../assets/toggle-light.png'

const Header  = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
       <div className="nav">
                <img src= {logo_light} alt="logo" className='logo' />

            <div className='menu' onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
              <span></span>
              <span></span>
              <span></span> 
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to='#about'>About</Link></li>
                <li><Link to='#services'>Services</Link></li>
                <li><Link to='#contact'>Contact</Link></li>
            </ul>

            <div className="search">
                <input type="text" placeholder='Search here'/>
                <img src= {search_icon} alt="search" />
            </div>

                <img onClick={()=>{toggle_mode()}} src={night_icon} alt="night" className='toggle' />
        </div>

         <div className="search-mobile">
                <input type="text" placeholder='Search here'/>
                <img src= {search_icon} alt="search" />
            </div>
    </div>
  )
}

export default Header